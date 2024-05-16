import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

function NoteList({ notes, onDelete, onChangeComplete , sortBy}) {
  let sortedNotes=notes
  if(sortBy==="earliest"){
    sortedNotes=[...notes].sort((a,b)=>new Date(a.createdAt)- new Date(b.createdAt))
  }
  if(sortBy==="latest"){
    sortedNotes=[...notes].sort((a,b)=>new Date(b.createdAt)- new Date(a.createdAt))
  }
  if(sortBy==="completed"){
    sortedNotes=[...notes].sort((a,b)=>Number(b.isCompleted)- Number(a.isCompleted))
  }
  return (
    <div className="note-container">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onChangeComplete={onChangeComplete}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onChangeComplete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.isCompleted ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.noteTitle}</p>
          <p className="desc">{note.noteDescription}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>
            <FaRegTrashCan />
          </button>
          <input
            type="checkbox"
            value={note.id}
            onChange={onChangeComplete}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
