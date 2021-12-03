import { useState } from "react";

export default function FileUploader({ value, onFileSelect }) {
    const [selectedImage, setSelectedImage] = useState('');

    const onFileChange = (e) => {
        // if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        // }
        onFileSelect(e.target.files[0]);
    };
    const removeSelectedImage = () => {
        setSelectedImage('');
    };

    return (
        <div className="d-flex">
            {selectedImage && (
                <div style={styles.preview}>
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Thumb"
                    />
                    <button onClick={removeSelectedImage} style={styles.delete} >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            )}
            <div className="upload-container card border py-1 px-3 m-0 d-flex w-100">
                <label
                    className="m-0 align-items-center justify-content-center text-center py-1"
                    htmlFor="ImageInput"
                    width="100%"
                >
                    Drag Files or Click to Browse
                </label>
                <input
                    type="file"
                    accept="image/*"
                    id="ImageInput"
                    style={{ display: "none" }}
                    onChange={(e) => onFileChange(e)}
                />
            </div>
        </div>
    );
}

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
        width: '55px',
        border: '2px solid #eee',
        marginRight: '10px',
        height: '100px',
        // overflow: 'hidden',
        position:'relative',
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
      position:'absolute',
      top: '-10px',
      borderRadius: '50%',
      right: '-10px',
      zIndex: '999999999',
    },
  };