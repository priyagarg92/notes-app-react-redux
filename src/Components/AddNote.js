import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_NOTE } from '../Store/action';

const AddNote = () => {
  const [text, setText] = useState('');
  const charactersLimit = 200;

  const notesList = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (charactersLimit - e.target.value.length > 0) {
      setText(e.target.value);
    }
  };

  const handleSave = () => {
    if (text.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: notesList.length + 1,
        text,
        date: date.toLocaleDateString(),
      };
      dispatch({ type: ADD_NOTE, payload: newNote });
      setText('');
    }
  };

  return (
    <div className="add-notes-wrapper">
      <textarea
        rows="10"
        cols="10"
        placeholder="Type to add a note..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="add-notes-footer">
        <span className="remaining-characters">
          {charactersLimit - text.length} remaining
        </span>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
