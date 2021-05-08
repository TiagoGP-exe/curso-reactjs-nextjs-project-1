import P from 'prop-types';
import './styles.css';

// eslint-disable-next-line react/prop-types
export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

TextInput.propsTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
