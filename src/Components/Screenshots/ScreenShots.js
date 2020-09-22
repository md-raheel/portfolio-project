import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { withRouter, useHistory } from "react-router-dom";

const ScreenShots = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(true);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.push("/portfolio");
  };

  return (
    <div>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[((photoIndex + 1) % images.length) - 1]}
          // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleClose}
          // onMovePrevRequest={() =>
          //   setPhotoIndex(photoIndex + images.length - 1) % images.length
          // }
          onMoveNextRequest={() =>
            setPhotoIndex(photoIndex + 1) % images.length
          }
        />
      )}
    </div>
  );
};

export default withRouter(ScreenShots);
