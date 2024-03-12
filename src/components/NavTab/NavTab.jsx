import { useState } from 'react';
import styles from './NavTab.module.scss'


function NavTab() {
    const [stateCheckBox1, setStateCheckBox1] = useState(false);
    const [stateCheckBox2, setStateCheckBox2] = useState(false);
    const [stateCheckBox3, setStateCheckBox3] = useState(false);
    const [stateCheckBox4, setStateCheckBox4] = useState(false);

    function switchStateCheckBox(setter) {
        setter(prevState => !prevState);
    }
    

  return (
    <nav className={styles.tabs}>
      <div className={styles.checkboxContainer}>
        <label
          className={
            stateCheckBox1 === false
              ? `${styles.checkbox}`
              : `${styles.checkboxChecked} ${styles.checkbox}`
          }
        >
          <input
            className={styles.checkboxInput}
            form="form"
            type="checkbox"
            id="checkbox1"
            checked={stateCheckBox1}
            onChange={() => switchStateCheckBox(setStateCheckBox1)}
          />
          <span className={styles.checkboxText}>Buds</span>
        </label>
      </div>
      <div
        className={`${styles.checkboxContainer} ${styles.checkboxContainer2}`}
      >
        <label
          className={
            stateCheckBox2 === false
              ? `${styles.checkbox}`
              : `${styles.checkboxChecked} ${styles.checkbox}`
          }
        >
          <input
            className={styles.checkboxInput}
            form="form"
            type="checkbox"
            id="checkbox2"
            checked={stateCheckBox2}
            onChange={() => switchStateCheckBox(setStateCheckBox2)}
          />
          <span className={styles.checkboxText}>Edible</span>
        </label>
      </div>
      <div
        className={`${styles.checkboxContainer} ${styles.checkboxContainer3}`}
      >
        <label
          className={
            stateCheckBox3 === false
              ? `${styles.checkbox}`
              : `${styles.checkboxChecked} ${styles.checkbox}`
          }
        >
          <input
            className={styles.checkboxInput}
            form="form"
            type="checkbox"
            id="checkbox3"
            checked={stateCheckBox3}
            onChange={() => switchStateCheckBox(setStateCheckBox3)}
          />
          <span className={styles.checkboxText}>Non Edible</span>
        </label>
      </div>
      <div
        className={`${styles.checkboxContainer} ${styles.checkboxContainer4}`}
      >
        <label
          className={
            stateCheckBox4 === false
              ? `${styles.checkbox}`
              : `${styles.checkboxChecked} ${styles.checkbox}`
          }
        >
          <input
            className={styles.checkboxInput}
            form="form"
            type="checkbox"
            id="checkbox4"
            checked={stateCheckBox4}
            onChange={() => switchStateCheckBox(setStateCheckBox4)}
          />
          <span className={styles.checkboxText}>Concentrate</span>
        </label>
      </div>
    </nav>
  );
}

export default NavTab;