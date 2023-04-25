import "./App.css";
import FileCrop from "./components/FileCrop";
import FileUpload from "./components/FileUpload";
import Home from "./components/Home";
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <div>
      <Home />
      <div className="Div">
        <FileUpload setImage={setImage} />
        <FileCrop imageUrl={imageUrl} />
      </div>
    </div>
  );
}

export default App;
