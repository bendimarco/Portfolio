import React from 'react'
import Banner from './img/webpointbanner.png'
import styles from "./Webpoint.module.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import BT from "./img/bt.png"
import CLSC from "./img/clsc.png"
import Food1 from "./img/food1.png"
import Food2 from "./img/food2.png"
import IGYB from "./img/igyb.png"
import Misc from "./img/misc.png"
import SISC from "./img/sisc.png"
import MB from "./img/mb.png"
import External from "./img/external.svg"
import Footer from "../../Nav/Footer"
import Resume from "../../../img/BenDiMarcoResume2024.pdf"

const Memento = () => {
    return (
        <div className={styles.body}>
           <div id="cursor"></div>
          {/* Banner */}
          <div className={styles.bannerDiv}>
            <img className={styles.bannerImg} src={Banner} alt="Memento Banner"/>
          </div>
          {/* Text Container */}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>WebPoint</h1>
            {/* Dates, Role */}
            <div className={styles.attrLabels}>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Dates</p>
                    <p className={styles.attrT}>Mar 2020 - Aug 2021</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Role</p>
                    <p className={styles.attrT}>Co-Founder</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>&#x200B;</p>
                    <p className={styles.attrT}>UX / UI / SWE</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            {/* Project Overview */}
            <p className={styles.overviewText}>
              I have always loved websites and the visual magic that they seemed to be to me. So during the winter of 2019, I started my journey into web development! To my sadness, there were extremely few resources at my school and amongst my friends to learn. I had to self-teach myself everything from HTML to CSS to Javascript from the ground up.
              At the same time, the world began to shut down. The COVID-19 pandemic was starting what would become a year-and-a-half-long shutdown that no one was anticipating. 
            </p>
            <p className={styles.overviewText}>
              With this happening, I realized how important a web presence really was for many small businesses and organizations. 
              So I asked my best friend if he wanted to start something with me. A volunteer organization where we would build websites for 
              local businesses and organizations for free. And in the process, it would give us practical experience in web design, development, and
              working with real-world clients. All while making a real impact on people.
            </p>
            <p className={styles.overviewText}>
              Our 2-person organization would quickly grow from us 2 to 14 total student volunteers. This was amazing to me because it allowed me to create the experience I wished I had for myself but for others. <a style={{color: "#6E6E6E"}} href="https://webpoint.dev/index.html" target="_blank">Check it out here</a>.
            </p>
            <h6 class={styles.sectionHeader}>Our Goal</h6>
            <p className={styles.overviewText}>
            We hoped to help local businesses create an online presence when it was more important than ever, and help students like us get real-world experience in web development and design while making an impact on their community.
            </p>
            <h6 class={styles.sectionHeader}>My Role</h6>
            <p className={styles.overviewText}>
              As both the technical and design lead, I mentored others on how to get started designing and developing, reviewed their work with them, and did my own designing and developing. And as a co-founder, I ensured everything at a high level was organized and running smoothly.
            </p>
            <h6 class={styles.sectionHeader}></h6>
            <p className={styles.overviewText}></p>
            <a style={{color: "black"}} href="https://ivegotyourbach.com/" target="blank"><h6 class={styles.sectionHeader}>I've Got Your Bach</h6></a>
            <p className={styles.overviewText}>The first website we created was for our friend Tomas, who runs his own piano accompaniment business! I've Got Your Bach provides piano accompaniment for recitals, music exams, rehearsals, and more. <a style={{color: "#6E6E6E"}} href="https://ivegotyourbach.com/" target="_blank">Check it out here</a>.</p>
            <img src={IGYB} className={styles.csImg}></img>
            <a style={{color: "black"}} href="https://scienceinsociety.github.io/" target="_blank"><h6 class={styles.sectionHeader}>Science in Society Conference</h6></a>
            <p className={styles.overviewText}>The Science and Society Conference is a county-wide STEM conference, helping students interested in science and technology learn about the field from a multitude of experts and professional speakers. <a style={{color: "#6E6E6E"}} href="https://scienceinsociety.github.io/" target="_blank">Check it out here</a>.</p>
            <img src={SISC} className={styles.csImg}></img>
            <h6 class={styles.sectionHeader}>Food on the 15th</h6>
            <p className={styles.overviewText}>Food on the 15th is a non-profit that delivers non-perishable foods to economically challenged senior citizens all around Howard County, Maryland.</p>
            <img src={Food1} className={styles.csImg}></img>
            <img src={Food2} className={styles.csImg}></img>
            <a style={{color: "#000"}} href="https://www.thebubbletrouble.com/" target="_blank"><h6 class={styles.sectionHeader}>Bubble Trouble</h6></a>
            <p className={styles.overviewText}>Bubble Trouble is an interactive educational website as well as a research project, conducted by Audrey Hasson (who developed the site). It aims to educate teenagers and parents about the alienation caused by the stigma surrounding the "green bubble" held by iPhone users. Those with Andriod devices and "green bubbles" are often excluded from group chats and digitally isolated, simply because they don't own an iPhone. <a style={{color: "#6E6E6E"}} href="https://www.thebubbletrouble.com/" target="_blank">Check it out here</a>.</p>
            <img src={BT} className={styles.csImg}></img>
            <a style={{color: "#000"}} href="https://www.clscweb.org/index.php?lang=en" target="_blank"><h6 class={styles.sectionHeader}>Chinese Language School of Columbia</h6></a>
            <p className={styles.overviewText}>The Chinese Language School of Columbia is a a 501(c)(3) nonprofit Chinese language school that partners with the Howard County Public School System. It teaches over 1,500 students how to speak Mandarin, write Chinese characters, and explore Chinese culture! <a style={{color: "#6E6E6E"}} href="https://www.clscweb.org/index.php?lang=en" target="_blank">Check it out here</a></p>
            <img src={CLSC} className={styles.csImg}></img>
            <h6 class={styles.sectionHeader}>Miscelleneous Designs</h6>
            <p className={styles.overviewText}></p>
            <img src={Misc} className={styles.csImg}></img>
            <h6 class={styles.sectionHeader}>Reflection</h6>
            <p className={styles.overviewText}>To this day, WebPoint is one of my favorite things I have ever done. I am so proud of everything we were able to create, and it was just genuinely amazing to see everyone come together and support me to do something great for our community. 
            It was not only my first dip into web design and development, but for 12 other students as well.</p>
            <p className={styles.overviewText}>I will never forget the messages relayed to us from the CLSC board on how much parents and students loved the new website and how pretty they thought it was. The fact that we were actually able to meet our goal of making an impact on our community gave me confidence in my heart that, with work, you really can make a difference.</p>
            <p className={styles.overviewText}>It was from this point on that I knew what I wanted to dedicate myself to. I wanted to make beautiful websites that put a smile on people's faces. Graduating high school, I was sad since I knew this chapter of my life had to come to an end. But it was when I least expected it that I fell into a new chapter of my journey. One that would, during my first semester of college, take me to the UMD Blockchain Accelerator and to work with the UMD basketball team, Memento!</p>
            <p className={styles.overviewText}>Check out Memento ↓ </p>
            <Link exact to="/memento"><img className={styles.bImg} src={MB}></img></Link>
            <div className={styles.footerText}>
                <div className={styles.footerC}>© {new Date().getFullYear()} Ben DiMarco</div>
                <a style={{textDecoration: 'none'}} href={Resume} target="_blank" className={styles.footerL}>Resume </a>
                <a href="mailto:bencdimarco@gmail.com" target="_blank" style={{textDecoration: 'none'}}  className={styles.footerL}>Email</a>
                <a href="https://twitter.com/bencdimarco" target="_blank" style={{textDecoration: 'none'}} className={styles.footerL}>Twitter</a>
            </div>
          </div>
        </div>
      )
}

export default Memento