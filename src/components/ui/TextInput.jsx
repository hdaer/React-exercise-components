import "./TextInput.css";

export const TextInput = ({ changeFn }) => {
  return (
    <>
      <input
        className="text-input"
        type="search"
        placeholder="type here..."
        onChange={changeFn}
      />
    </>
  );
};
