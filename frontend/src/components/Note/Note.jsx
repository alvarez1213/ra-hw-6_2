import "./note.css";

export const Note = ({ note, handleDelete }) => {
  return (
    <div data-id={note.id} className="note">
      <div className="note__text">{note.content}</div>
      <div onClick={handleDelete} className="note__delete-sign">&#10060;</div>
    </div>
  );
};
