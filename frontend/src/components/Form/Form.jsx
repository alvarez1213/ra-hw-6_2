import "./form.css";

export const Form = ({ handlePost }) => {
  return (
    <form className="form" autoComplete="false" onSubmit={handlePost}>
      <label className="form__label" htmlFor="note">
        Новая запись
      </label>
      <div className="form__input">
        <textarea
          name="note"
          id="note"
          maxLength={140}
          autoFocus
          required
        ></textarea>
        <button className="form__btn">
          <span className="form__btn-text">&#11166;</span>
        </button>
      </div>
    </form>
  );
};
