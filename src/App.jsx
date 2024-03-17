import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoProvider from "./context/PhotoContext";

const PHOTO_URL = "/photos.json";
// esta const no sé bien qué es

const App = () => {
  return (
    <>
      <PhotoProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PhotoProvider>
    </>
  );
};
export default App;
