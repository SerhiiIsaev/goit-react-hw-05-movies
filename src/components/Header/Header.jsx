
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header =()=> {
  return (
  <nav className={styles.header}>
    <NavLink to="/" className={styles.HeaderLink}>
      Home
    </NavLink>

    <NavLink to="/movies" className={styles.HeaderLink}>
      Movies
    </NavLink> 
  </nav>
);
}

export {Header}