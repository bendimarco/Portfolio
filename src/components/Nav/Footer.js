import React from 'react'
import styles from "./Footer.module.css";

export default function Nav ({ theme }) {

    return (
        <div className={styles.navContainer}>
            <p>bendimar.co</p>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}>work</li>
                <li className={styles.navLink}>play</li>
                <li className={styles.navLink}>about</li>
            </ul>
        </div>
    )
}