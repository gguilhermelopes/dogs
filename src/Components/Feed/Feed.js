import React from "react";
import FeedPhoto from "./FeedPhoto";
import FeedModal from "./FeedModal";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
