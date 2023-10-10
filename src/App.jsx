import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/notesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "10/10/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "11/10/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "12/10/2023",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "13/10/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <>
      <div className="container">
        <NotesList notes={notes} handleAddNote={addNote} />
      </div>
    </>
  );
}

export default App;
