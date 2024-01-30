/** @format */

import React, { useState } from "react";
import styles from "./Card.module.css";
import Likes from "../Likes/Likes";
import Comment from "../Comments/Comments";
const PostsCard = ({posts, userI, users}) => {
  const [commentModal, setCommentModal] = useState(false)
  // const users =[]
  console.log(users)
  return (
    <section className='main-content grid'>
      <div className='main-gallery-wrapper flex-container'>
        <div className='pop-wrapper flex-container'>
          <span className='pop flex-container'>
            <div className='pop-img-container'>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj2neyxX6xCcoiQLdU8IzlbZNT6PQ2nsQab0-MzEwgTllwCCrosZ8IrEmjXd9-923wLg&usqp=CAU"
                // src='https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                alt=''
                className='pop-img'
              />
            </div>
            <p className='pop-text'>Lorem.</p>
          </span>

          <span className='pop flex-container'>
            <div className='pop-img-container'>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj2neyxX6xCcoiQLdU8IzlbZNT6PQ2nsQab0-MzEwgTllwCCrosZ8IrEmjXd9-923wLg&usqp=CAU"
                // src='https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                alt=''
                className='pop-img'
              />
            </div>
            <p className='pop-text'>Lorem.</p>
          </span>
          <span className='pop flex-container'>
            <div className='pop-img-container'>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj2neyxX6xCcoiQLdU8IzlbZNT6PQ2nsQab0-MzEwgTllwCCrosZ8IrEmjXd9-923wLg&usqp=CAU"
                // src='https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
                className='pop-img'
              />
            </div>
            <p className='pop-text'>Lorem.</p>
          </span>
          <span className='pop flex-container'>
            <div className='pop-img-container'>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj2neyxX6xCcoiQLdU8IzlbZNT6PQ2nsQab0-MzEwgTllwCCrosZ8IrEmjXd9-923wLg&usqp=CAU"
                // src='https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
                className='pop-img'
              />
            </div>
            <p className='pop-text'>Lorem.</p>
          </span>
          <span className='pop flex-container'>
            <div className='pop-img-container'>
              <img
                src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                alt=''
                className='pop-img'
              />
            </div>
            <p className='pop-text'>Lorem.</p>
          </span>
          <span className='pop flex-container'>
            <div className='pop-img-container'>
              <img
                src='https://images.unsplash.com/photo-1657003963857-ec800f2cce43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80'
                alt=''
                className='pop-img'
              />
            </div>
            <p className='pop-text'>Lorem.</p>
          </span>
        </div>
        {posts?.map((el) => (
          <div key={el.id} className='card-wrapper flex-container'>
            <div className='card-header grid'>
              <div className='header-img-container flex-container'>
                <img
                  className='card-header-img'
                  src={el.createdUserPhoto}
                  alt=''
                />
              </div>
              <span className='card-title'>{el.createdBy}</span>

              <span className='card-subtitle'>{el.title}</span>
              <div className='card-opt-btn flex-container'>
                <i className='bi bi-three-dots'></i>
              </div>
            </div>
            <div className='card-img-container'>
              <img src={el.imageUrl} className='card-img' alt='' />
            </div>
            <div className='card-data flex-container'>
              <div className='card-icons flex-container'>
                <span className='card-icon card-icon-left'>
                  <Likes id={el.id} likes={el.likes} />
                </span>
                <span className='card-icon card-icon-left'>
                  <i className='bi bi-chat'></i>
                </span>
                <span className='card-icon card-icon-left'>
                  <i className='bi bi-send'></i>
                </span>
                <span className='card-icon card-icon-right'>
                  <i className='bi bi-bookmark'></i>
                </span>
              </div>
              <span className='bold card-text'>{} Likes</span>
              <span className='card-text'>
                <span className='bold title-margin'>{el.createdBy}</span>
                {el.description}
              </span>
              <span
                className='card-text comments-btn'
                  onClick={() => setCommentModal(el.id)}
              >
                See more comments
              </span>
              {commentModal == el.id ? (
              <Comment
                id={el.id}
                postImg={el.imageUrl}
                setCommentModal={setCommentModal}
                createdUserPhoto={el.createdUserPhoto}
              />
            ) : null}
              <span className='card-time'></span>
              <div className='add-comment-container flex-container'>
                <span className='card-icon'>
                  <i className='bi bi-emoji-smile'></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='sidebar'>
        <div className='sidebar-menu-container'>
          <div className='sidebar-card sidebar-header grid'>
            {/* <img
            src={user?.photoURL}
            alt=''
            className='sidebar-img sidebar-hd-img'
          /> */}
            <span className='sidebar-title card-title'>
              {userI ? userI?.displayName : null}
            </span>
            <span className='card-subtitle sidebar-subtitle'>
              {" "}
              {userI ? userI?.email : null}
            </span>
            <span className='sidebar-btn'>Change</span>
          </div>
          <div className='suggestions-header grid'>
            <span className='suggestions-text'>Suggestions for you</span>
            <span className='sidebar-btn-alt'>See all</span>
          </div>
          {users?.map((el) => (
            <div className='sidebar-card sidebar-card-alt grid'>
              <img
                src={el.userPhoto}
                alt=''
                className='sidebar-img side-bar-img-alt'
              />
              <a href={el.uid} className='sidebar-title card-title'>{el.userName}</a>
              <span className='card-subtitle sidebar-subtitle sidebar-subtitle-alt'>
                
              </span>
              <a href={`/${el.id}`} className='sidebar-btn'>see</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsCard;
