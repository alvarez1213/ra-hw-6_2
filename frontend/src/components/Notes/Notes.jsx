import "./notes.css";

import { Note } from "../Note";

export const Notes = ({ notes, handleDelete, handleUpdate }) => {
  return (
    <div className="notes">
      <h1 className="notes__title">Заметки</h1>
      <span onClick={handleUpdate} className="notes__reload-sign">&#10227;</span>
      <div className="notes__items">
        {notes.map((note) => (
          <Note key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
