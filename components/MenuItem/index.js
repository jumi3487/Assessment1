import styles from './MenuItem.module.css'

export default function MenuItem({
    title = "",
    bgColor,
    textColor,
    tabLeft }) { 
    return (
        <ul className={styles.menuitem}
        style={{
            backgroundColor: bgColor,
            textColor: textColor,
            paddingLeft: tabLeft}}>  

            <li className={styles.list}>Experience</li>
            <li className={styles.list}>Education</li>
            <li className={styles.list}>Projects</li>
            <li className={styles.list}>Volunteering</li>
            <li className={styles.list}>Skills</li>
            <li className={styles.list}>Interests</li>
        </ul>
    )
}