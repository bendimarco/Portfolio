import React from 'react'
import styles from "./Nav.module.css";
import pfp from "./pfp.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Nav ({ theme }) {

    return (
        <div className={styles.navContainer}>
            <Link exact to="/">
                <img className={styles.pfpImg} src={pfp}></img>
            </Link>
        </div>
    )
}