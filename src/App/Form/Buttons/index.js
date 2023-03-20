import "./style.css";

const Button = ({ type, text, onSubmit, onReset }) => (
  <button className="form__button" type={type}>
    {text}
  </button>
);

export default Button;
