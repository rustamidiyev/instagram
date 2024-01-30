/** @format */

import React, { useState } from "react";
import styles from "./Sidebar.module.css";
// import img from "next/img";
import {
  createIcon,
  HomeIcon,
  exploreIcon,
  instagramIcon,
  messageIcon,
  moreIcon,
  notificationIcon,
  reelsIcon,
  searchIcon,
} from "../../assets/icons/index";
import CreateModal from "../../components/Modal/CreateModal";
import { auth } from "../../components/lib/firebase";

const Sidebar = () => {
  const logoutUser = () => {
    localStorage.removeItem("userIn");
    window.location.reload();
    auth.signOut();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo_wrapper}>
          <img src={instagramIcon} alt='#' />
        </div>
        <ul className={styles.sidebar_menu}>
          <li>
            <a href='/' className={styles.nav_link}>
              <span className={styles.icon}>
                <img alt='#' src={HomeIcon} />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav_link}>
              <span className={styles.icon}>
                <img src={searchIcon} alt='#' />
              </span>
              Search
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav_link}>
              <span className={styles.icon}>
                {" "}
                <img src={exploreIcon} alt='#' />
              </span>
              Explore
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav_link}>
              <span className={styles.icon}>
                {" "}
                <img src={reelsIcon} alt='#' />
              </span>
              Reels
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav_link}>
              <span className={styles.icon}>
                {" "}
                <img src={messageIcon} alt='#' />
              </span>
              Messages
            </a>
          </li>
          <li>
            <a href='#' className={styles.nav_link}>
              <span className={styles.icon}>
                {" "}
                <img src={notificationIcon} alt='#' />
              </span>
              Notifications
            </a>
          </li>
          <li>
            <a
              href='#'
              className={styles.nav_link}
              onClick={() => setIsModalVisible(!isModalVisible)}>
              <span className={styles.icon}>
                {" "}
                <img src={createIcon} alt='#' />
              </span>
              Create
            </a>
          </li>
          <li>
            <a href='/profile' className={styles.nav_link}>
              {/* <img
                fill={true}
                className='icon rounded-circle'
                src='https://avatars.githubusercontent.com/u/1743919?v=4'
                alt='Profile icon'
              /> */}
              Profile
            </a>
          </li>
       
        </ul>

        <ul className={styles.sidebar_menu}>
          <li onClick={logoutUser}>
            <a href='#' className={styles.nav_link}>
              <span className={styles.icon}>
                <img src={moreIcon} alt='#' />
              </span>
              Logout
            </a>
          </li>
        </ul>
        {isModalVisible ? (
          <CreateModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        ) : null}
      </div>
    </>
  );
};

export default Sidebar;
