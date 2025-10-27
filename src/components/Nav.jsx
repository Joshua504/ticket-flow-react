import { useState } from "react";
import { Link } from "react-router";
import styles from "../styles/nav.module.scss";

const Nav = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
 <>
 <nav className={styles.nav}>
 <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
 <Link className={styles.navLink} to="/" onClick={() => setIsOpen(false)}>
 home
 </Link>
 <Link className={styles.navLink} to="/dashboard" onClick={() => setIsOpen(false)}>
 Dashboard
 </Link>
 <Link className={styles.navLink} to="/tickets" onClick={() => setIsOpen(false)}>
 Tickets
 </Link>
 </ul>
 <div className={styles.logo}>zenDesk</div>
 <div className={styles.links}>
 <div
 className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
 onClick={() => setIsOpen(!isOpen)}
 >
 <span className={styles.bars}></span>
 <span className={styles.bars}></span>
 </div>
 <Link className={styles.login} to="/auth/login" onClick={() => setIsOpen(false)}>
 Login
 </Link>
 </div>
 </nav>
 </>
 );
};

export default Nav;
