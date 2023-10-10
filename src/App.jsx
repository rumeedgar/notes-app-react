import { useState } from "react";
import NotesList from "./components/notesList";

function App() {
  return (
    <>
      <div className="container">
        <NotesList />
      </div>
    </>
  );
}

export default App;
