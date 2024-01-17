import styles from './SideBar.module.css'
import Image from 'next/image'

export default function SideBar() {
    return (
            <div className={styles.head}>
                <Image src={'/images/profile.png'} alt="profile icon" width={50} height={50}/>
                <header className={styles.headname}> 
                    Jumi Pham 
                    <br/>
                    <span style={{ fontSize: '16px' }}>Graphic Designer</span>
                </header>
            </div>
    );
}
