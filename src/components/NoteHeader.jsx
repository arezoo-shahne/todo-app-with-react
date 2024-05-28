import React from "react";

function NoteHeader({ notes, sortBy, onSortBy }) {
  return (
    <div className="note-header">
      <h1>
        My Notes <span>({notes.length})</span>
      </h1>
      <div>
        <select value={sortBy} onChange={onSortBy}>
          <option value="latest">Sort By Latest Note</option>
          <option value="earliest">Sort By earliest Note</option>
          <option value="completed">Sort By completed Note</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
