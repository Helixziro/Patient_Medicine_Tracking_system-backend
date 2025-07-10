const FormInput = ({ name, value, onChange, placeholder, type = "text" }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    required
  />
);

export default FormInput;
