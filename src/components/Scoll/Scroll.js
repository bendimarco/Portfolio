import React from 'react'
import styles from "./Scroll.module.css";

export default function Scroll ({ theme }) {

    return (
        <div className={styles.border}>
            <div className={styles.wheel} />
        </div>
    )
}