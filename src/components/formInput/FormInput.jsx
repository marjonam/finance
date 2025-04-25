import "./FormInput.scss";

function FormInput({ label, name, type, placeholder }) {
  return (
    <label className="formInput">
      <span className="formInput-label">{label}</span>
      <input
        className="formInput-input"
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

export default FormInput;
