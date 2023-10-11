import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/notesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "don't forget to order food on chowdeck",
      date: "10/10/2023",
    },
    {
      id: nanoid(),
      text: "learn how to center a div lol👀",
      date: "11/10/2023",
    },
    {
      id: nanoid(),
      text: "go on backdrop to look at pretty pictures",
      date: "12/10/2023",
    },
    {
      id: nanoid(),
      text: "react is fun",
      date: "13/10/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </>
    </div>
  );
}

export default App;
