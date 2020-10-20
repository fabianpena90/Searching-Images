import React from 'react';
import './ImgList.css'

function ImageList(props) {
  console.log(props.images)
  let singleImg = props.images.map((eachImg) => {
    return <img src={eachImg.urls.regular} alt={eachImg.description} />
  })

  return (
    <div className="image-list">
      {singleImg}
    </div>
  );
}

export default ImageList;