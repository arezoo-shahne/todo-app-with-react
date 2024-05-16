import React from "react";

function NoteStatus({ notes }) {
  if (!notes.length) return <h3>There Is No Note!</h3>;
  return (
    <ul className="note-status">
      <li>
        All <span>{notes.length}</span>
      </li>
      <li>
        Completed <span>{notes.filter((note) => note.isCompleted).length}</span>
      </li>
      <li>
        Open <span>{notes.filter((note) => !note.isCompleted).length}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
