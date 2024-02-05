import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = () => {
  const notesList = useSelector((state) => state);
  console.log('list', notesList);

  return (
    <div className="notes-list-wrapper">
      {notesList.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}

      <AddNote />
    </div>
  );
};

export default NotesList;
