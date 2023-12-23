import React from 'react'
import Banner from './img/MementoBanner.png'
import styles from "./Memento.module.css";

const Memento = () => {
    return (
        <div className={styles.body}>
          {/* Banner */}
          <div className={styles.bannerDiv}>
            <img className={styles.bannerImg} src={Banner} alt="Memento Banner"/>
          </div>
          {/* Text Container */}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Memento</h1>
            {/* Dates, Role */}
            <div className={styles.attrLabels}>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Dates</p>
                    <p className={styles.attrT}>Oct. 2021 - Apr. 2022</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Role</p>
                    <p className={styles.attrT}>Design Lead</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>&#x200B;</p>
                    <p className={styles.attrT}>Product / Brand / UX / UI / SWE</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            {/* Project Overview */}
            <p className={styles.overviewText}>
            In my freshman semester at the University of Maryland College Park, I worked alongside two seniors to build a company that would go on to partner with the University of Maryland Athletics department, and became the only student-created company to be accepted into the inaugural cohort of the <a style={{textDecoration: 'none', color: 'white'}}target="_blank" href="https://www.rhsmith.umd.edu/centers-initiatives/supply-chain-management-center/initiatives-programs/blockchain-accelerator">University of Maryland’s Blockchain Accelerator</a>.
            </p>
            <h6 class={styles.sectionHeader}>Our Goal</h6>
            <p className={styles.overviewText}>
            <span style={{color: "white"}}>We wanted to make NFTs more accessible.</span> To us, this meant breaking down the financial barrier of high NFT costs, as well as breaking down the technical wall of setting up an account with a crypto exchange, transferring funds, etc. We all loved the technology behind NFTs and saw a future where we use they are a form of digital keepsake where we have been, hence Memento. In order for this reality to come to fruition, we would need NFTs to be much more accessible.
            </p>
            <h6 class={styles.sectionHeader}>The Process</h6>
            <p className={styles.overviewText}></p>
          </div>
        </div>
      )
}

export default Memento