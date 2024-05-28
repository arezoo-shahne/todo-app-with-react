import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function noteReducer(notes, { type, payload }) {
  switch (type) {
    case "addNote": {
      return [...notes, payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== payload);
    }
    case "setComplete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, isCompleted: !note.isCompleted } : note
      );
    }
    default:
      throw new Error("Unknown" + type);
  }
}
function App() {
  const [sortBy, setSortBy] = useState("");
  const [notes, dispatch] = useReducer(noteReducer, []);
  const handleAddNote = (newNotes) => {
    dispatch({ type: "addNote", payload: newNotes });
  };
  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  const handleCheckComplete = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "setComplete", payload: noteId });
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
