import { Calendar2 } from "../../assets/Calendar2";
import { MessageQuestion } from "../../assets/MessageQuestion";
import { Notification } from "../../assets/Notification";

import styles from "../../styles/Header/IconMenu.module.css";

export default function IconMenu() {
  return (
    <span className={styles.iconMenu}>
      <Calendar2 />
      <MessageQuestion />
      <Notification />
    </span>
  );
}
