import React from 'react'
import Banner from './img/BPSbanner.png'
import styles from "./BPS.module.css";

const BPS = () => {
    return (
        <div className={styles.body}>
          {/* Banner */}
          <div className={styles.bannerDiv}>
            <img className={styles.bannerImg} src={Banner} alt="NeverDMCA Banner"/>
          </div>
          {/* Text Container */}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>BPS ASTA</h1>
            {/* Dates, Role */}
            <div className={styles.attrLabels}>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Dates</p>
                    <p className={styles.attrT}>May 2022 - Aug. 2022</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Role</p>
                    <p className={styles.attrT}>UI/UX Designer, Front-End Engineer</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>&#x200B;</p>
                    <p className={styles.attrT}>UX / UI / SWE</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            {/* Project Overview */}
            <p className={styles.overviewText}>
                I had the opportunity to work directly with Sander Shoullhoff (COO) and Anaum Khan (CEO) to help revamp their brand identity and update their landing page to reflect this new identity. As their only contracted UI/UX designer, I created high fidelity mockups and unique, vectorized design components.
            </p>
            <h6 class={styles.sectionHeader}>Our Goal</h6>
            <p className={styles.overviewText}>
            <span style={{color: "#182B4B", fontWeight: '500'}}>We wanted to make NFTs more accessible.</span> To us, this meant breaking down the financial barrier of high NFT costs, as well as breaking down the technical wall of setting up an account with a crypto exchange, transferring funds, etc.


We all loved the technology behind NFTs and saw a future where we use they are a form of digital keepsake where we ____, hence Memento.

In order for this reality to come to fruition, we would need NFTs to be much more accessible.


            </p>
          </div>
        </div>
      )
}

export default BPS