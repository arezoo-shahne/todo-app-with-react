import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const handleAddNote = (newNotes) => {
    setNotes((prevState) => [...prevState, newNotes]);
  };
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((prevNote) => prevNote.id !== id));
  };
  const handleCheckComplete = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevState) =>
      prevState.map((note) =>
        note.id === noteId ? { ...note, isCompleted: !note.isCompleted } : note
      )
    );
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSortBy={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onChangeComplete={handleCheckComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
