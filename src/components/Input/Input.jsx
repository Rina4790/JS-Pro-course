export const Input = ({ value, onChange, label }) => {
  return (
    <div>
      {label}
      <input value={value} onChange={onChange} />
    </div>
  );
};
