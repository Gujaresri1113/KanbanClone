import { ArrowLeft } from "../../assets/ArrowLeft";
import NavMenu from "./NavMenu";
import MyProjects from "./MyProjects";
import Thoughts from "./Thoughts";

import styles from "../../styles/Drawer/SideDrawer.module.css";
import colorfilter from '../../assets/images/vuesax-bulk-colorfilter.svg';

export default function SideDrawer({ children, header }) {
  return (
    <div className={styles.sideDrawer}>
      <header className={styles.header}>
        <span className={styles.headerText}>
          <img className="colorfilter" src={colorfilter} alt="color-filter" />
          <h2>Project M.</h2>
        </span>
        <span className={styles.arraow}><ArrowLeft /></span>
      </header>
      <main>
        <NavMenu />
        <MyProjects />
        <Thoughts />
      </main>
    </div>
  );
}
