/** @format */

// import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Igtv, Posts, Saved, Settings, Tagged } from "../icons";
import ExploreRowCards from "../ExploreRowCards/ExploreRowCards";
import { Button } from "antd";
import Sidebar from "../../features/sidebar/Sidebar";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firestore } from "../lib/firebase";
import ModalItem from "./ModalItem/ModalItem";
import { useParams } from "react-router-dom";
// import axios from "axios";

const Profile = () => {
  const params = useParams()
  const [userSetting, setUserSetting] = useState(false);
  const [posts, setPosts] = useState([]);
  let id = "mucahitsah";
  //  console.log(posts)
  const userI = JSON.parse(localStorage.getItem("userIn"));

  const [userImage, setUserImage] = React.useState();
  React.useEffect(() => {
    if (id === "mucahitsah") {
      //my profile photo
      // setUserImage("https://avatars.githubusercontent.com/u/38807255");
    } else {
      //random profilPhoto
      // setUserImage("https://picsum.photos/200");
    }
  }, [id]);
  console.log(params);

  useEffect(() => {
    const articleRef = collection(firestore, "posts");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(articles);
    });
  }, []);

  const userPosts = posts.filter((post) => post.userId == userI.uid);
  console.log(userPosts);
  var otherUser = false;
  return (
    <>
      <Sidebar />
      <div className='profile'>
        <header className='profileHeaderRow'>
          <div className='profilePhotoCol'>
            <img src={userI?.photoURL} alt='profile' />
          </div>
          <div className='profileContentCol'>
            <div className='title'>
              {!otherUser ? (
                <>
                  <div className='username'>
                    <span>{userI?.displayName}</span>
                  </div>
                  <div className='editProfile'>
                    <span>Edit Profile</span>
                  </div>
                  <div
                    className='settings'
                    onClick={() => setUserSetting(!userSetting)}>
                    <Settings />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className='username'>
                      <span>{id}</span>
                    </div>
                    <Button>Follow</Button>
                  </div>
                </>
              )}
            </div>
            <div className='counter'>
              <div>
                <span>{userPosts?.length}&nbsp;</span>
                posts
              </div>
              <div>
                <span>0&nbsp;</span>
                followers
              </div>
              <div>
                <span>0&nbsp;</span>following
              </div>
            </div>
            <div className='biographyRow'>
              <div className='displayName'>
                <span>{id}</span>
              </div>
              <div className='biography'>
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>
        </header>
        <div className='profileTabs'>
          <div className='tabItem active'>
            <Posts />
            <span>Posts</span>
          </div>
          <div className='tabItem'>
            <Igtv />
            <span>IGTV</span>
          </div>
          <div className='tabItem'>
            <Saved />
            <span>Saved</span>
          </div>
          <div className='tabItem'>
            <Tagged />
            <span>Tagged</span>
          </div>
        </div>
        <div className='profilePosts'>
          <ExploreRowCards userPosts={userPosts} />
        </div>
        {/* <BottomNavigation /> */}
      </div>
      {userSetting ? (
        <ModalItem
          userPhoto={userI?.photoURL}
          user={userI}
          userName={userI?.displayName}
          setUserSetting={setUserSetting}
        />
      ) : null}
    </>
  );
};

export default Profile;
