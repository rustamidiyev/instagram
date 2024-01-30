/** @format */

// YourComponent.js
import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
// import dynamic from "next/dynamic";
// import Image from "next/imag
// import { Modal } from "antd";
import { Button, Modal } from "antd";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { firestore, storage } from "../lib/firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";
// import { Modal } from 'antd';

// const Modal = dynamic(() => import("antd").then((antd) => antd.Modal), {
//   ssr: false,
// });
// const Modal = typeof window !== 'undefined' ? require('antd').Modal : null;

const CreateModal = ({ isModalVisible, setIsModalVisible }) => {
  //       if(typeof window !== 'undefined') {
  //     return null
  //   }
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log(isModalVisible);
  const userI = JSON.parse(localStorage.getItem("userIn"));
  const [selected, setSelected] = useState();
  const [selectedImg, setSelectedImg] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const publishPosts = async (data) => {
    setLoading(true);
    try {
      const storageRef = ref(
        storage,
        `/images/${Date.now()}${selectedImage?.name}`
      );
      const uploadImage = uploadBytesResumable(storageRef, selectedImage);
      await uploadImage;
      const url = await getDownloadURL(uploadImage.snapshot.ref);

      const articleData = {
        // title: title,
        // description: description,
        imageUrl: url,
        createdAt: Timestamp.now().toDate(),
        createdUserPhoto: userI?.photoURL,
        createdBy: userI?.displayName,
        userId: userI.uid,
        likes: [],
        comments: [],
      };
      console.log(articleData);
      const articleRef = collection(firestore, "posts");
      await addDoc(articleRef, articleData);

      setLoading(null);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  // Example usage of publishPosts
  useEffect(() => {
    // publishPosts({
    //   title: "Your Title",
      // imageUpload: selectedImage ? selectedImage : null,
    //   user: "njdcksncsk",
    //   description: "Your Description",
    // });
    if (loading == null) return handleCancel();
  }, [loading]); // This will run when the component mounts
  console.log(userI);
  return (
    <div>
      <Modal
        footer={false}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <label htmlFor='upload' className={styles.label}>
          Select from compyter
        </label>
        <input
          className={styles.input}
          type='file'
          id='upload'
          onChange={handleFileChange}
          accept='image/*'
        />
        {imageSrc && (
          <div className={styles.uploaded_content}>
            <h4>Preview:</h4>
            <div className={styles.modal_image_container}>
              <img
                alt='#'
                className={styles.uploaded_image}
                fill={true}
                src={imageSrc}
              />
            </div>
            <Button
              onClick={publishPosts}
              loading={loading}
              type='primary'
              className={styles.button}>
              Share
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CreateModal;
