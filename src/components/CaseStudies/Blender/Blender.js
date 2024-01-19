import React from 'react'
import Banner from './img/blender.png'
import styles from "./Blender.module.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Hallo from "./img/hallo.png" 
import Kiki from "./img/kiki.png" 
import Tina from "./img/tina.png" 
import Resume from "../../../img/BenDiMarcoResume2024.pdf"


const Memento = () => {
    return (
        <div className={styles.body}>
          {/* Banner */}
          <div className={styles.bannerDiv}>
            <img className={styles.bannerImg} src={Banner} alt="Memento Banner"/>
          </div>
          {/* Text Container */}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>3D Modeling</h1>
            {/* Dates, Role */}
            <div className={styles.attrLabels}>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Dates</p>
                    <p className={styles.attrT}>Aug 2023 - Present</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>&#x200B;</p>
                    <p className={styles.attrT}>Blender</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            {/* Project Overview */}
            <p className={styles.overviewText}>
            One of my main goals for 2024 is to become much more comfortable and experienced with 3D modeling. Specifically, I am focusing on hard-surface modeling and physical product design in Blender.
            </p>
            <p className={styles.overviewText}> Here are a few of my past projects. Enjoy!
            </p>
            <h6 class={styles.sectionHeader}>Halloween Donut</h6>
            <p className={styles.overviewText}>Following <a style={{color: "#555555"}}target="_blank" href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">Andrew Price's Donut Tutorial</a>, I created this cute, animated Halloween donut model!
            </p>
            <img className={styles.csImg} src={Hallo}></img>
            <h6 class={styles.sectionHeader}>Kiki's Bakery (WIP)</h6>
            <p className={styles.overviewText}>Inspired by the below fan art of the bakery from Kiki's Delivery Service by Studio Ghbili, I wanted to recreate this scene in Blender!
            Sadly, due to my potato laptop, it has been very tedious to work on and render. 🥲</p>
            <img className={styles.csImg} src={Kiki}></img>
            <h6 class={styles.sectionHeader}>Tina Kitten Vandal Skin (WIP)</h6>
            <p className={styles.overviewText}>I am a huge fan of the Twitch streamer <a style={{color: "#555555"}}target="_blank" href="https://www.twitch.tv/tinakitten">Tina Kitten</a>. In 2023, she played a lot of Valorant, so I thought it would be fun to try to make a Tina Kitten-themed skin for the Vandal just like the ones from the game! This skin featured a basket-woven magazine and a cute little bow on the side :)</p>
            <img className={styles.csImg} src={Tina}></img>
            {/* <p className={styles.overviewText}>Ian built a payment system that would allow users to buy an NFT with their credit card, and I was enlisted to give it a web presence and a pretty coat of paint.</p>
            <h6 class={styles.sectionHeader}>Our Goal</h6>
            <p className={styles.overviewText}>
            <span style={{color: "white"}}>We wanted to make NFTs more accessible.</span> To us, this meant breaking down the financial barrier of high NFT costs as well as the technical wall of setting up an account with a crypto exchange, transferring funds, etc. We all loved the technology behind NFTs and saw a future where they are a form of digital keepsake. A reminder of where we have been, hence Memento. In order for this reality to come to fruition, we would need NFTs to be much more accessible.
            </p>
            <h6 class={styles.sectionHeader}>What was Memento?</h6>
            <p className={styles.overviewText}>Memento started out as an NFT platform that would allow users to purchase NFTs simply with their credit card. Unlike other NFT marketplaces, Memento would mint the NFT purchased directly to your own ETH wallet, meaning reduced transaction fees and not needing to buy any cryptocurrency before purchasing! It also reduced the average price of an NFT on a marketplace (which was $5,800 on OpenSea) to $10. With this, we were able to lauch an official NFT drop for the Maryland basketball team and recieved a $1,000 non-dilutive investment. 
            <p className={styles.overviewText}>Not long after, we realized the amount of complexity and competition in the field of NFT marketplaces was just too high. It was then that we decided to adapt to a time-based drop platform, where we would partner with local artists to give them a new stream of income to support their art. Every week, a set of new NFTs would drop and only be available for 24 hours. There would be unlimited quanitiy (at a cheap price and only 1 per customer), but after the drop, they were never to be minted again.
            This created a time-based exclusivity (with users being rewarded for supporting the rise of local artists) that we hoped would replace the status quo of exclusivity based on who could afford an NFT. It was with <a style={{color: 'white'}} href="https://docs.google.com/presentation/d/1p3vhRDUqsdYDr1XxSrG8v80HN6ntjA3I_0y2VOIMv44/edit?usp=sharing" target="_blank">this pivot</a> that we got accepted into the UMD Blockchain Accelerator as the first and only student-run company to do so.</p> 
            </p>
            <h6 class={styles.sectionHeader}>My Designs!</h6>
            <p className={styles.overviewText}></p>
            <img className={styles.csImg} src={Work}></img>
            <h6 class={styles.sectionHeader}>Lost to the sands of time ...</h6>
            <p className={styles.overviewText}>As I was a full-time student taking 17 credits and was working in an extremely fast-paced way to keep up, a lot of my work was lost to time. I would mostly design directly in HTML and CSS, so I dont have too many artifacts left :(</p>
            <h6 class={styles.sectionHeader}>Reflections</h6>
            <p className={styles.overviewText}>Memento was my first foray into the world of entrepaneurship and the process of building a real product from scratch. </p>
            <Link exact to="/bps"><img className={styles.bImg} src={BB}></img></Link> */}
              <div className={styles.footerText}>
                <div className={styles.footerC}>© {new Date().getFullYear()} Ben DiMarco</div>
                <a style={{textDecoration: 'none', }}  href={Resume} target="_blank" className={styles.footerL}>Resume </a>
                <a href="mailto:bencdimarco@gmail.com" target="_blank" style={{textDecoration: 'none'}}  className={styles.footerL}>Email</a>
                <a href="https://twitter.com/bencdimarco" target="_blank" style={{textDecoration: 'none'}} className={styles.footerL}>Twitter</a>
            </div>
          </div>
        </div>
      )
}

export default Memento