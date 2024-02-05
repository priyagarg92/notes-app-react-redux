import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_NOTE } from '../Store/action';
import deleteIcon from '../trash-icon.png';

const Note = ({ id, text, date }) => {
  const dispatch = useDispatch();

  const removeNoteHandler = () => {
    dispatch({ type: REMOVE_NOTE, id });
  };

  return (
    <div className="note-wrapper">
      <p>{text}</p>
      <div className="note-footer">
        <span>{date}</span>
        <img
          src={deleteIcon}
          alt="delete icon"
          className="delete-icon"
          onClick={removeNoteHandler}
        />
      </div>
    </div>
  );
};

export default Note;
