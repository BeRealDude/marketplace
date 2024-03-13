/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Dropdown.module.scss';

function Dropdown({
  onOptionToggle,
  selectedOptions,
  setSelectedOptions,
  options,
  title,
}) {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  const handleOptionToggle = option => {
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
    onOptionToggle(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapTitleBtn}>
        <h3 className={styles.title}>{title}</h3>
        <button
          type="button"
          className={
            open
              ? `${styles.btnIconUp} ${styles.btnIconDown}`
              : styles.btnIconUp
          }
          onClick={toggleAccordion}
        />
      </div>
      {open && (
        <div className={styles.wrapList}>
          {options.map(option => (
            <div className={styles.wrapCheckbox} key={option.id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={`option-${option.id}`}
                checked={selectedOptions.some(
                  selectedOption => selectedOption.id === option.id,
                )}
                onChange={() => handleOptionToggle(option)}
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
