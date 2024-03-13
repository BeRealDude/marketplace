import { useState } from 'react';
import styles from './Dropdown.module.scss';

const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
];

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  const toggleOption = option => {
    const isSelected = selectedOptions.some(
      selectedOption => selectedOption.id === option.id,
    );
    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter(
          selectedOption => selectedOption.id !== option.id,
        ),
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h3>Classification</h3>
      <button
        type="button"
        className={
          open ? styles.btnIconUp : `${styles.btnIconUp} ${styles.btnIconDown}`
        }
        onClick={toggleAccordion}
      />

      {open && (
        <div>
          {options.map(option => (
            <div key={option.id}>
              <input
                type="checkbox"
                id={`option-${option.id}`}
                checked={selectedOptions.some(
                  selectedOption => selectedOption.id === option.id,
                )}
                onChange={() => toggleOption(option)}
              />
              <label htmlFor={`option-${option.id}`}>{option.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
