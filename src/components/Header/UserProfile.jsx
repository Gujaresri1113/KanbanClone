import React from "react";

import { ArrowDown } from "../../assets/ArrowDown";
import CurrentUser from "../../media/current-user.jpg";

import styles from "../../styles/Header/UserProfile.module.css";

export default function UserProfile() {
  return (
    <div className={styles.userProfile}>
      <div className={styles.userInfo}>
        <span className={styles.userName}>Anima Agrawal</span>
        <span className={styles.userAddress}>U.P, India</span>
      </div>
      <img
        src={CurrentUser}
        alt="Anima Agrawal"
        width="38px"
        height="38px"
        className={styles.userImage}
      />
      <ArrowDown />
    </div>
  );
}
