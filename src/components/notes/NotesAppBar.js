import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFileUploading, startSaveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(startSaveNote(active));
  };

  const handleImageLoad = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startFileUploading(file));
    }
  };

  return (
    <div className="notes__appbar animate__animated animate__fadeInUp">
      <span>14 de mayo 2022</span>
      <input
        type="file"
        hidden={true}
        onChange={handleFileChange}
        id="fileSelector"
      />
      <div>
        <button className="btn" onClick={handleImageLoad}>
          Picture
        </button>
        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
