import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Твой<span>Тур</span>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Маршрут
        </NavLink>

        <NavLink to="/hot-tours" className={styles.link}>
          Горящие туры
        </NavLink>

        <NavLink to="/new-places" className={styles.link}>
          Новые места
        </NavLink>
      </nav>
    </header>
  )
}