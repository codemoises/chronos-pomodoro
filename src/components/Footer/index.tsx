import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda como funciona o pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
}
