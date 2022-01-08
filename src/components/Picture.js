import { useState } from "react";

export const Picture = ({ url, title, explanation, date }) => {

  const [like, setLike] = useState(false) //for implementing 2 states of like button

  const showPictures = url ? true : false

  return (
    showPictures ? 
    <div className = "Single-post-container">
      <img 
        src= {url}
        alt="new"
        height="undefined"
        width="450"
        style = {{borderRadius: "4%"}}
      />
      <div className = "Picture-text-area">
        <b style = {{fontSize: 20}}>
          {title + " @ " + date}
        </b>
        <p style = {{fontSize: 13}}>
          {explanation}
        </p>
      </div>
      <button onClick={() => setLike(!like)} className = {like ? "Button-like" : "Button-no-like"}>
        {like ? "Liked" : "Like"}
      </button>
    </div>
    : 
    <p>
    </p>
  );
};
