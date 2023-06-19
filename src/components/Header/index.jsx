import IconMenu from "./IconMenu";
import UserProfile from "./UserProfile";
import Search from "./Search";

import styles from "../../styles/Header/MainHeader.module.css";

export default function MainHeader() {
  return (
    <div className={styles.header}>
      <Search />
      <div className={styles.rightHeader}>
        <IconMenu />
        <UserProfile />
      </div>
    </div>
  );
}
