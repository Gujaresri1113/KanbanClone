import './App.css';
import Content from "./components/Content";
import Header from "./components/Header";
import Drawer from "./components/Drawer/SideDrawer";

import styles from "./layout.module.css";

function App() {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className={styles.container}>
      <section className={styles.leftContainer}>
        <Drawer/>
      </section>
      <section className={styles.rightContainer}>
        <Header />
        <Content />
      </section>
    </div>
  );
}

export default App;
