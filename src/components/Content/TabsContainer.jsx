import { ArrowDown } from "../../assets/ArrowDown";
import { Filter } from "../../assets/Filter";
import { Calendar } from "../../assets/Calendar";
import { Profile } from "../../assets/Profile";
import { Menu } from "../../assets/Menu";
import { Pause } from "../../assets/Pause";
import Tab from "../UI/Tab";

import styles from "../../styles/Content/TabsContainer.module.css";

export default function TabsContainer() {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.left}>
        <Tab>
          <Filter />
          <span>Filter</span>
          <ArrowDown />
        </Tab>
        <Tab>
          <Calendar />
          <span>Today</span>
          <ArrowDown />
        </Tab>
        <span className={styles.shareTab}>
          <Tab>
            <Profile />
            <span>Share</span>
          </Tab>
        </span>
      </div>
      <div className={styles.right}>
        <Tab>
          <Profile />
          <span>Share</span>
        </Tab>
        <div className={styles.separator}></div>
        <Pause />
        <Menu />
      </div>
    </div>
  );
}
