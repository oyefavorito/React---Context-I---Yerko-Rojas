// tengo que llamar al context
// tengo que llamar a la carta
// tengo que hacer una función parecida a la de galeria
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "../components/Card";

import "./Favorites.css";

const Favorites = () => {
  const { photos, toggleLike } = useContext(PhotoContext);

  // Filtrar las fotos para obtener solo las que tienen 'liked' como verdadero
  const favoritePhotos = photos.filter((photo) => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo) => (
          <Card
            key={photo.id}
            photo={photo}
            onClick={() => toggleLike(photo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
