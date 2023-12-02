import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p> List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WordWise Inc.
        </p>
      </footer>
    </div>
  );
}
