import { Home } from "../../assets/Home";
import { Message } from "../../assets/Message";
import { Task } from "../../assets/Task";
import { Profile } from "../../assets/Profile";
import { Setting } from "../../assets/Setting";

import styles from "../../styles/Drawer/NavMenu.module.css";

export default function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      <li className={styles.menuItem}>
        <Home />
        <span>Home</span>
      </li>
      <li className={styles.menuItem}>
        <Message />
        <span>Messages</span>
      </li>
      <li className={styles.menuItem}>
        <Task />
        <span>Tasks</span>
      </li>
      <li className={styles.menuItem}>
        <Profile />
        <span>Members</span>
      </li>
      <li className={styles.menuItem}>
        <Setting />
        <span>Settings</span>
      </li>
    </ul>
  );
}
