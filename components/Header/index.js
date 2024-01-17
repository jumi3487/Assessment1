import styles from "./Header.module.css"
import Image from 'next/image'

export default function Header() {
    return (
        <>
        <div className={styles.header}>
            <h1 className={styles.dashboard}>Dashboard</h1>
            <div className={styles.bellContainer}>
                <Image src={'/images/bell.png'} alt="profile icon" width={25} height={25}/>
                <p>Friday</p>
            </div>
        </div>
        </>
    );
}