import React, { useState } from "react";

function AddNewNote({onAddNote}) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!noteTitle || !noteDescription) return ;
    const newNotes = {
      noteTitle,
      noteDescription,
      id: Date.now(),
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNotes)
    setNoteTitle("")
    setNoteDescription("")
    
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="Note Title ..."
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Note Description ..."
          value={noteDescription}
          onChange={(e) => setNoteDescription(e.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
