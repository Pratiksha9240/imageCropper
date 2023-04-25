import { Button } from "@mui/material";

const FileUpload = (props) => {

  return (
    <div style={{marginLeft: '200px'}}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" type="file" id="selected-image" onChange={(e) => props.setImage(e.target.files[0])}/>
      </Button>
      {/* <div>
        {imageUrl && <img src={imageUrl} alt="selectedImage"/>}
      </div> */}
    </div>
  );
};

export default FileUpload;
