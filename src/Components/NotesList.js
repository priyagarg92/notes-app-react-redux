import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = () => {
  const notesList = useSelector((state) => state);

  return (
    <div className="notes-list-wrapper">
      {notesList &&
        notesList.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            isEditable={note.isEditable}
          />
        ))}

      <AddNote />
    </div>
  );
};

export default NoteList;
