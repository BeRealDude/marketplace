
import FormSearch from "../FormSearch/FormSearch";
import NavTab from "../NavTab/NavTab";
import styles from './Header.module.scss';



function Header() {

   

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Marketplace</h1>
          <FormSearch />
          <NavTab />
    </header>
  );
}

export default Header;
