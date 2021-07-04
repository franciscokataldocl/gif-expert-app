import React from "react";

const GifGridItem = ({ title, url }) => {
  //console.log(id, title, url)
  return (
    <div className="gifItem animate__animated animate__fadeInUp">
      <span className="imageCutter">
        <img alt={title} src={url} />
      </span>
      <span className="titleBox animate">
        <h4>{title}</h4>
      </span>
    </div>
  );
};

export default GifGridItem;
