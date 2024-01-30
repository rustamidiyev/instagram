import React from "react";
// import "./ExploreRowCards.scss";

const ExploreRowCards = ({userPosts}) => {
  return (
    <div className="exploreRow">
   {userPosts?.map((img, index)=>(
     <div className="exploreItem">
        <img src={img.imageUrl} alt="explore card" />
      </div>
   ))}
  
    </div>
  );
};

export default ExploreRowCards;
