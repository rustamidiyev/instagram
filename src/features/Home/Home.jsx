/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import PostsCard from "../../components/Card/PostsCard";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firestore } from "../../components/lib/firebase";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const userI = JSON.parse(localStorage.getItem("userIn"));

 const [users, setUsers] = useState([])
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
  useEffect(() => {
    const userRef = collection(firestore, "Users");
    const q = query(userRef, orderBy("userPhoto", "asc"));
    onSnapshot(q, (snapshot) => {
      const usersR = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersR);
    });
  }, []);
//   console.log(posts);
  return (
    <>
      <Sidebar />
      <PostsCard posts={posts}  userI={userI} users={users}/>
    </>
  );
};

export default Home;
