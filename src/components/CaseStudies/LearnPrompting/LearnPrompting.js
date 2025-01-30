import { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from "./LearnPrompting.module.css"
import WB from "./img/wb.png"
import Resume from "../../../img/BenDiMarcoResume-2025.pdf"
import lpbanner from "./img/lpbanner.png"
import lpmain from "./img/lpmain.png"
import lp1 from "./img/lp1.png"
import HAP from "./img/HAP.png"
import lpds from "./img/lpds.png"
import lp1new from "./img/lp1new.png"
import lp2 from "./img/lp2.png"
import LP6 from "./img/LP6.png"
import LP5 from "./img/LP5.png"

const LearnPrompting = () => {
    return (
        <div className={styles.body}>
            <div id="cursor"></div>
            {/* Banner */}
            <div className={styles.bannerDiv}>
                <img
                    src={lpbanner}
                    className={styles.bannerImg}
                    alt="ASTA"
                />
            </div>
            {/* Text Container */}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Learn Prompting</h1>
                {/* Dates, Role */}
                <div className={styles.attrLabels}>
                    <div className={styles.attr}>
                        <p className={styles.attrLabel}>Dates</p>
                        <p className={styles.attrT}>Apr 2023 - Present</p>
                    </div>
                    <div className={styles.attr}>
                        <p className={styles.attrLabel}>Role</p>
                        <p className={styles.attrT}>Lead Designer / Design Engineer</p>
                    </div>
                    <div className={styles.attr}>
                        <p className={styles.attrLabel}>&#x200B;</p>
                        <p className={styles.attrT}>Brand / UX / UI / SWE</p>
                    </div>
                </div>
                <div className={styles.divider}></div>
                
                <p className={styles.sectionTag}>Problem</p>
                <p className={styles.sectionTitle}>Learn Prompting lacked any brand or creative direction and wished to ramp-up growth.</p>
                <p className={styles.overviewText}>I was recruited by Sander Schullhoff, NLP/DRL researcher and CEO of Learn Promtping, to act as a growth Design Engineer and their first external hire. When I started working for Learn Prompting, the site was simply a base <a style={{color: "#848899"}}href="https://docusaurus.io/" target="_blank">Docusaurus</a> template.</p>
                
                <p className={styles.sectionTag}>Solution</p>
                <p className={styles.sectionTitle}>Directed the implementation of brand identity, design systems, and a comprehensive site rebuild.</p>
                <img
                    src={lpmain}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <p className={styles.sectionTag}>Results</p>
                <p className={styles.sectionTitle}>5x increase in MAUs to 3M+.<br/>20x increase in gross revenue.<br/>3x increase in internal implementation speeds.</p>
                <p className={styles.overviewText}></p>
                <p className={styles.overviewText}>(Full Case Study Coming Soon)</p>

                <h6 className={styles.sectionHeader}>Landing Page Redesign</h6>
                <p className={styles.overviewText}>
                    Through my redesign, I hoped to increase the professionalism and credibility of Learn Prompting by showcasing the strong community and resource base they had built. I also hoped to make it clear to new users how prompt engineering could directly apply to their lives and how using Learn Prompting could have a direct positive impact on their ability to do the work they wish to do.
                </p>
                <img
                    src={lp1}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <p className={styles.sectionTag}>Works in Progress</p>
                <h6 className={styles.sectionHeader}>HackAPrompt 2.0 (WIP)</h6>
                <p className={styles.overviewText}>Full landing page design for the second annual HackAPrompt Competition hosted by Learn Prompting</p>
                <img
                    src={HAP}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <h6 className={styles.sectionHeader}>Going Dark (WIP)</h6>
                <p className={styles.overviewText}>In light of beginning to roll out their in-depth premium prompt engineering courses and transitioning to a hybrid model (both free and paid resources), Sander wanted a new design to let people know of this shift.</p>
                <img
                    src={lpds}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <h6 className={styles.sectionHeader}>Dark Landing Page (WIP)</h6>
                <p className={styles.overviewText}>To refelct this new design system and the new needs of Learn Prompting, I once again redesigned the landing page to highlight the premium prompt engineering courses offered and the academic research that supports them.</p>
                <img
                    src={lp1new}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <h6 className={styles.sectionHeader}>LMS (WIP)</h6>
                <p className={styles.overviewText}></p>
                <img
                    src={lp2}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <h6 className={styles.sectionHeader}>Slide Decks (WIP)</h6>
                <p className={styles.overviewText}></p>
                <img
                    src={LP6}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <h6 className={styles.sectionHeader}>Marketing Materials (WIP)</h6>
                <p className={styles.overviewText}></p>
                <img
                    src={LP5}
                    className={styles.csImg}
                    alt="ASTA"
                />

                <h6 className={styles.sectionHeader}>More Coming Soon</h6>
                <p className={styles.overviewText}>And... that's all! Stay tuned for the finalized case study, and I can't wait to show you what I get to create next! In the meantime, check out where it all started: WebPoint ↓<br></br></p>
                <Link exact to="/webpoint"><img className={styles.bImg} src={WB}></img></Link>
                
                <div className={styles.footerText}>
                    <div className={styles.footerC}>© {new Date().getFullYear()} Ben DiMarco</div>
                    <a style={{textDecoration: 'none'}} href={Resume} target="_blank" className={styles.footerL}>Resume </a>
                    <a href="mailto:bencdimarco@gmail.com" target="_blank" style={{textDecoration: 'none'}} className={styles.footerL}>Email</a>
                    <a href="https://twitter.com/bencdimarco" target="_blank" style={{textDecoration: 'none'}} className={styles.footerL}>Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default LearnPrompting