import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// const createNotes = (note) => {
//   return <Note key={note.id} heading={note.title} body={note.content} />;
// };

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.id} heading={note.title} body={note.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
