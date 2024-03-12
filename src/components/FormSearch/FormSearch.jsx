import { useState } from 'react';
import styles from './FormSearch.module.scss'

function FormSearch() {
  const [valueSearch, setValueSearch] = useState('');

  function handleChange(e) {
    setValueSearch(e.target.value);
  }

   function handleSubmit(e) {
       e.preventDefault();
       console.log('Искать:', valueSearch);
    }
    return (
      <>
        <form
          className={styles.form}
          name="form"
          id="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <span className={styles.icon} />
          <input
            className={styles.input}
            value={valueSearch || ''}
            onChange={handleChange}
            // onClick={onClickHandler}
            // onBlur={onOnBlur}
            type="text"
            name="form-search"
            id="form-search"
            required
            placeholder="Search for a product, flower, etc"
          />
        </form>
      </>
    );
}

export default FormSearch;
