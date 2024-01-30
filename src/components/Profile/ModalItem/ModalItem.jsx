/** @format */

import React, { useState } from "react";
import "./ModalItem.scss";
// import "./ModalItem.scss"
import { useDispatch, useSelector } from "react-redux";
// import { changeUserProfile, updateDisplayNameAsync } from "../../../redux/extraReducer";
import { DateRange } from "@mui/icons-material";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { changeUserProfile } from "../../../reduxToolkit/extraReducer";
const ModalItem = ({ setUserSetting, userPhoto, userName, user }) => {
  const [newDisplayName, setDisplayName] = useState("");
  const [userImage, setUserImage] = useState(userPhoto);
  var dispatch = useDispatch();
const {postLoading} = useSelector(state=>state.posts)
  const [data, setData] = useState({
    img: userPhoto,
    username: userName,
    user: user,
  });

  // const form = useForm.
  const handleProfileImageChange = (e) => {
    // setData((prev) => ({ ...prev, img: e.target.files[0] }));

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setData((prev) => ({ ...prev, img: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const onFinish = ( value) => {
    console.log(data);
    // e.preventDefault();
    dispatch(changeUserProfile(value))
  };
  return (
    <>
      <div className='user_setting'>
        <span className='close-btn' onClick={() => setUserSetting(false)}>
          x
        </span>
        <Form onFinish={onFinish} className='update-user-container'>
          <div className='user__profile__container'>
            <img src={data.img} alt='' />
          </div>
          <div className='user__upload__container'>
            <label for='upload'>+</label>
            <input
              type='file'
              id='upload'
              onChange={handleProfileImageChange}
              style={{ display: "none" }}
            />
          </div>

          <Form.Item name='username'>
            <Input defaultValue={data.username} value={data.username} />
          </Form.Item>

          <Button loading={postLoading} className='btn' htmlType='submit' type='primary'>
            Save
          </Button>
        </Form>
      </div>
      <div className='w-screen'></div>
    </>
  );
};

export default ModalItem;
  