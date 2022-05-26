import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NotesScreen = () => {
  // const urlImg =
  //   "https://t2.ev.ltmcdn.com/es/posts/4/2/2/tipos_de_fondos_marinos_3224_1_600.jpg";

  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  //Evitar loop por cambio de nota
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content animate__animated animate__fadeIn">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          name="title"
          onChange={handleInputChange}
        ></input>

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          value={body}
          name="body"
          onChange={handleInputChange}
        ></textarea>

        {note.imageUrl && (
          <div className="notes__image">
            <img src={note.imageUrl} alt="imagen" />
          </div>
        )}
      </div>
      <button className="btn btn-danger pointer" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
