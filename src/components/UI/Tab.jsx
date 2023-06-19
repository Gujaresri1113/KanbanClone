import styles from "../../styles/UI/Tab.module.css"

export default function Tab({children}) {
  return (
    <div className={styles.tab}>{children}</div>
  )
}
