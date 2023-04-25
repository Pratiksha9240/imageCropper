const FileCrop = (props) => {
  return <div>{props.imageUrl && <img src={props.imageUrl} alt="selectedImage" />}</div>;
};

export default FileCrop;
