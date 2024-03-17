import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "./Card";

const Gallery = () => {
  const { photos, toggleLike } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <Card
          key={photo.id}
          photo={photo}
          onClick={() => toggleLike(photo.id)}
        />
      ))}
    </div>
  );
};
export default Gallery;
