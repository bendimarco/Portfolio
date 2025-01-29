import { useState, useCallback, lazy, Suspense } from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import styles from "./LearnPrompting.module.css";
import Banner from "./img/lpbanner.png"

import LP1 from "./img/lp1.png"
import LP1New from "./img/lp1new.png"
import LP2 from "./img/lp2.png"
import LP3 from "./img/LP3.png"
import LP4 from "./img/LP4.png"
import LP5 from "./img/LP5.png"
import LP6 from "./img/LP6.png"
import DS from "./img/lpds.png"
import WB from "./img/wb.png"
import OG from "./img/lpog.png"
import HAP from "./img/HAP.png"
import Footer from "../../Nav/Footer"
import Resume from "../../../img/BenDiMarcoResume2025.pdf"
const LazyImage = lazy(() => import('../../LazyImage'));
const ImagePlaceholder= lazy(() => import('../../ImagePlaceholder'));

    // const [detailActive, setDetailActive] = useState(false);
    // const [detailImg, setDetailImg] = useState(Comp);
  
    // const detailActivate = useCallback((src) => {
    //   setDetailImg(src)
    //   setDetailActive(true)
    // }, [detailActive]);

    // const detailNullify = useCallback(() => {
    //   setDetailActive(false)
    // }, [detailActive]);

const LearnPrompting = () => {
    return (
        <div className={styles.body}>
             <div id="cursor"></div>
            {/* Banner */}
            <div className={styles.bannerDiv}>
            <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/lpbanner.png")}
                    className={styles.bannerImg}
                    alt="ASTA"
                  />
                </Suspense>
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
            {/* Project Overview */}
              {/* <p className={styles.sectionTag}>Overview</p>
            <p className={styles.overviewText}>
                During the summer of 2023, I worked alongside two software engineers to build, design, and creatively lead NeverDMCA, an AI music generation platform that would go on to partner with <a style={{color: "#999CAC"}} target="_blank" href="https://www.youtube.com/@woodyandkleiny">Woody and Kleiny</a>
            </p> */}
               <p className={styles.sectionTag}>Overview</p>
             <p className={styles.sectionTitle}>The first non-founder employee for the world's largest LLM and Prompt Engineering Resource.</p>
             <p className={styles.overviewText}>
                Recruited by Sander Schullhoff, NLP/DRL researcher and CEO of Learn Promtping, to act as a growth Design Engineer.
            </p>
            <p className={styles.sectionTag}>Problem</p>
            <p className={styles.sectionTitle}>Learn Prompting lacked any brand or creative direction and wished to ramp-up growth.</p>
            <p className={styles.overviewText}>When I started working for Learn Prompting, the site was simply a base <a style={{color: "#848899"}}href="https://docusaurus.io/" target="_blank">Docusaurus</a> template.</p>
            {/* <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/lpog.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense> */}
            <p className={styles.sectionTag}>Solution</p>
            <p className={styles.sectionTitle}>Directed the implementation of brand identity, design systems, and a comprehensive site rebuild.</p>
            <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/lpmain.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
            <p className={styles.overviewText}>
                
            </p>
            {/* <img className={styles.csImg} src={One}></img> */}

            <p className={styles.sectionTag}>Results</p>
            <p className={styles.sectionTitle}>5x increase in MAUs to 3M+.<br/>20x increase in gross revenue.<br/>3x increase in internal implementation speeds.</p>
            <p className={styles.overviewText}>
            </p>
            <p className={styles.overviewText}>(Full Case Study Coming Soon)</p>
            {/* <p className={styles.overviewText}>During the spring of 2023, I was offered the opportunity to redesign the landing page of Learn Prompting, one of the largest prompt engineering resources available online.
            Created by Sander Schullhoff, an NLP and DRL researcher at the University of Maryland, right after the initia launch of ChatGPT in November 2022, Learn Prompting became a key resource for many people discovering the world of generative AI.</p>
            <p className={styles.overviewText}>At the moment I began working on Learn Prompting, it was simply a base <a style={{color: "#848899"}}href="https://docusaurus.io/" target="_blank">Docusaurus</a> template.</p>
            <p className={styles.imgSubtext}>The original Learn Prompting landing page was the base Docusaurus home page</p> */}
            <h6 class={styles.sectionHeader}>Landing Page Redesign</h6>
            <p className={styles.overviewText}>
            Through my redesign, I hoped to increase the professionalism and credibility of Learn Prompting by showcasing the strong community and resource base they had built. I also hoped to make it clear to new users how prompt engineering could directly apply to their lives and how using Learn Prompting could have a direct positive impact on their ability to do the work they wish to do.</p>
            <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/lp1.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
            <p class={styles.sectionTag}>Works in Progress</p>
            <h6 class={styles.sectionHeader}>HackAPrompt 2.0 (WIP)</h6>
            <p className={styles.overviewText}>Full landing page design for the second annual HackAPrompt Competition hosted by Learn Prompting</p>
            <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/HAP.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
            {/* <h6 class={styles.sectionHeader}>Success!</h6>
            <p className={styles.overviewText}>After my redesign, Learn Prompting grew from 650K active monthly users to over 1M! I have since become Lead Designer within the company and am currently executing a rebrand focusing on the release of premium prompt engineering courses currently being created and released by Sander and other AI researchers.</p> */}
            <h6 class={styles.sectionHeader}>Going Dark (WIP)</h6>
            <p className={styles.overviewText}>In light of beginning to roll out their in-depth premium prompt engineering courses and transitioning to a hybrid model (both free and paid resources), Sander wanted a new design to let people know of this shift.</p>
            {/* <p className={styles.overviewText}>Previously, I had never created a full brand guideline or design system, so this was a great time to start. This is an ever-evolving and expanding design system that is still being developed by me.</p> */}
            {/* <p className={styles.overviewText}>We ultimately decided to go with a darker space theme based on Learn Prompting's iconic astronaut. As this evolves, I hope to create a sense of wonder and excitement, as well as security. As if Learn Prompting is your comforting guide to this new universe of generative AI.</p> */}
            <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/lpds.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
            <h6 class={styles.sectionHeader}>Dark Landing Page (WIP)</h6>
            <p className={styles.overviewText}>To refelct this new design system and the new needs of Learn Prompting, I once again redesigned the landing page to highlight the premium prompt engineering courses offered and the academic research that supports them.</p>
            <p className={styles.overviewText}></p>
            <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/lp1new.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
            <h6 class={styles.sectionHeader}>LMS (WIP)</h6>
            <p className={styles.overviewText}></p>
            {/* <p className={styles.overviewText}>Currently, I am working on designing Learn Prompting's new LMS (Learning Management System)!</p> */}
            <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/lp2.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
                <h6 class={styles.sectionHeader}>Slide Decks (WIP)</h6>
                <p className={styles.overviewText}></p>
                <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/LP6.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
                <h6 class={styles.sectionHeader}>Marketing Materials (WIP)</h6>
                <p className={styles.overviewText}></p>
                <Suspense fallback={<ImagePlaceholder />}>
                  <LazyImage
                    src={import("./img/LP5.png")}
                    className={styles.csImg}
                    alt="ASTA"
                  />
                </Suspense>
            <h6 class={styles.sectionHeader}>More Coming Soon</h6>
            <p className={styles.overviewText}>And... that's all! Stay tuned for the finalized case study, and I can't wait to show you what I get to create next! In the meantime, check out where it all started: WebPoint ↓<br></br></p>
            <Link exact to="/webpoint"><img className={styles.bImg} src={WB}></img></Link>
            <div className={styles.footerText}>
                <div className={styles.footerC}>© {new Date().getFullYear()} Ben DiMarco</div>
                <a style={{textDecoration: 'none'}}  href={Resume} target="_blank" className={styles.footerL}>Resume </a>
                <a href="mailto:bencdimarco@gmail.com" target="_blank" style={{textDecoration: 'none'}}  className={styles.footerL}>Email</a>
                <a href="https://twitter.com/bencdimarco" target="_blank" style={{textDecoration: 'none'}} className={styles.footerL}>Twitter</a>
            </div>
            </div>
        </div>
        )
}
    
export default LearnPrompting