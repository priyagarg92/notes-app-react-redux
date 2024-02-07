import React, { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { IS_EDITABLE, REMOVE_NOTE, UPDATE_NOTE } from "../Store/action";

const Note = ({ id, text, date, isEditable }) => {
  const [updatedText, setUpdatedText] = useState(text);
  const dispatch = useDispatch();
  const charactersLimit = 200;

  const removeNoteHandler = () => {
    dispatch({ type: REMOVE_NOTE, id });
  };

  const handleChange = (e) => {
    if (charactersLimit - e.target.value.length > 0) {
      setUpdatedText(e.target.value);
    }
  };

  const handleEdit = (e) => {
    dispatch({ type: IS_EDITABLE, id });
  };

  const handleSave = () => {
    if (updatedText.trim().length > 0) {
      const date = new Date();
      const editedNote = {
        id,
        text: updatedText,
        date: date.toLocaleDateString(),
        isEditable: false,
      };

      dispatch({ type: UPDATE_NOTE, payload: editedNote });
    }
  };

  return (
    <div>
      {isEditable ? (
        <div className="add-notes-wrapper">
          <textarea
            rows="10"
            cols="10"
            placeholder="Type to add a note..."
            value={updatedText}
            onChange={handleChange}
          ></textarea>
          <div className="add-notes-footer">
            <span className="remaining-characters">
              {charactersLimit - text.length} remaining
            </span>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      ) : (
        <div className="note-wrapper">
          <p>{text}</p>
          <div className="note-footer">
            <span>{date}</span>
            <span>
              <FaTrashAlt
                onClick={removeNoteHandler}
                className="delete-button"
              />
              <FaPencilAlt onClick={handleEdit} className="edit-button" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
