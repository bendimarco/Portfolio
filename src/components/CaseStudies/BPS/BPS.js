import React from 'react'
import Banner from './img/BPSbanner.png'
import Persona from './img/bpspersona.png'
import One from "./img/bps1.png"
import Model1 from "./img/model1.png"
import Model2 from "./img/model2.png"
import Model3 from "./img/model3.png"
import styles from "./BPS.module.css";
import OOUX from "./img/OOUX.png"
import LogCard from "./img/log.png"
import Cards from "./img/cards.png"
import NB from "./img/nb.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from "../../Nav/Footer"
import Resume from "../../../img/BenDiMarcoResume-2025.pdf"

const BPS = () => {
    return (
        <div className={styles.body}>
           <div id="cursor"></div>
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
                    <p className={styles.attrT}>May 2022 - Aug 2022</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Role</p>
                    <p className={styles.attrT}>UI/UX Designer, Design Engineer</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>&#x200B;</p>
                    <p className={styles.attrS}>UX / UI / SWE</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            {/* Project Overview */}
            <p className={styles.sectionTag}>Overview</p>
            <p className={styles.sectionTitle}>BPS wants to simplify their test result navigation.</p>
            <p className={styles.overviewText}>
                Recruited by managing partner David Issac, I collaborated with a software engineer to design and implement a refined, professional, and simplified interface for <a style={{color: "#16243B"}} target="_blank" href="https://www.bpsconsulting.com/asta/">ASTA</a>, a fully autonomous software test agent created by Business Performance Systems (BPS).
            </p>
            <p className={styles.sectionTag}>Problem</p>
            <p className={styles.sectionTitle}>Navigating ASTA's enormous test results was confusing, overwhelming, and time consuming.</p>
            <p className={styles.overviewText}>It was made clear to me from day one that the largest problem facing ASTA was its lack of simplistic and intuitive navigation.
            It was integral to allow users easy access to information pertaining to every single component of a website in a digestible and approachable way.
            </p>
        
            <p className={styles.sectionTag}>Solution</p>
            <p className={styles.sectionTitle}>A reimagined test result page with a focus on simple site navigation and error highlighting.</p>
            <p className={styles.overviewText}>This new test result, or "Model," page prominently displayed errored components and introduced a hierarchical navgiagtion system to make search more intuitive.</p>
            <img className={styles.csImg} src={One}></img>

            <p className={styles.sectionTag}>Results</p>
            <p className={styles.sectionTitle}>10x decrease in average search time.<br/>30% increase in self-reported user satisfaction.</p>

            <p className={styles.sectionTag}>Process</p>
            <h6 class={styles.sectionHeader}>Understanding the User</h6>
            <p className={styles.overviewText}>The users of ASTA were software engineers who needed an efficient way to process errors found on their website.</p>
            <img className={styles.csImg} src={Persona}></img>
            <h6 class={styles.sectionHeader}>Defining Objects</h6>
            <p className={styles.overviewText}>To begin, I felt like it would be a good idea in this case to use <a style={{color: "#16243B"}} target="_blank" href="https://www.ooux.com/what-is-ooux">Sophia Prater's OOUX design principle</a> to identify all of the major objects that would need to be designed for in ASTA. 
            I wanted to simplify the sheer volume and complexity of things happening within ASTA into a smaller subset of objects. With these objects in mind, I began to redesign, starting with the model page of ASTA.</p>
            <img className={styles.csImg} src={OOUX}></img>
            <p className={styles.imgSubtext}>Object Map</p>
            <h6 class={styles.sectionHeader}>Model Page Redesign</h6>
            <p className={styles.overviewText}>When provided a link, ASTA tests the entirety of the website provided to it. It then compiles all of the errors encountered when testing and provides them back to the user.
            The goal of the model page is to give an overall sense of the results of a test by showing every component tested and the errors found when testing them. The initial design of the model page was very unprofessional with confusing hierarchy, discernability, and filtering options.</p>
            <h6 class={styles.sectionHeader}>Iteration 1</h6>
            <img className={styles.csImgwt} src={Model1}></img>
            {/* <p className={styles.imgSubtext}>Model page pre-redesign (L), First iteration of redesign (R)</p>
            <p className={styles.overviewText}>The initial design of the model page was very unprofessional, with confusing information hierarchy, discernability, and filtering options.
            To address this, I moved all filtering options to be aligned with the column of data that they would be filtering. I also added tags for each type of webpage component (as detailed in the object map).
            This redesign achieved a more professional look, understandable filtering options, and newfound discernability between components; however, it was still lacking in a few key areas. </p>
            <p className={styles.overviewText}>After talking with engineers using ASTA and consulting with Mr. Isaac, I determined two issues were left unaddressed. My redesign did not allow for a large amount of information to be on the screen at any single time. 
            Additionally, for the same reason, it was still very difficult for users to gain a quick, overall assessment of how their website performed during testing and did not provide many options for macro navigation over all components of the website. With this in mind, I worked on a second redesign of the model page to address these problems.</p> */}
            <h6 class={styles.sectionHeader}>Iteration 2</h6>
            <img className={styles.csImgwt} src={Model2}></img>
            {/* <p className={styles.imgSubtext}>First iteration of redesign (L), Second iteration of redesign (R)</p>
            <p className={styles.overviewText}>This redesign addressed the issues of macro navigation and increased the data displayed by simplifying the table used to showcase all of the components and creating a new macro navigation component next to the table. 
            This navigation component would allow the user to see the entire structure of their tested site and toggle on and off the components (and groups of components) that they would like to see in the detailed table.
            </p>
            <p className={styles.overviewText}>Talking with and interviewing engineers again, I discovered this new format did achieve its goal of allowing users to see and navigate through the overwhelming number of components on the average website. However, I found many users did not understand the macro navigation panel on first use.
            This was a very new format for every user I talked to, and because of this, the table was much less intuitive to use.</p>
            <p className={styles.overviewText}>Additionally, a new pain point surfaced when condensing the model table. It became much harder for users to distinguish which test results were correlated to each component. It was also very difficult for users to instantly identify where the errors occurred on their website, increasing the time they had to search before being able to learn about and start working on a solution to the errors found by ASTA.</p> */}
            <h6 class={styles.sectionHeader}>Iteration 3</h6>
            <img className={styles.csImgwt} src={Model3}></img>
            <p className={styles.imgSubtext}>Second iteration of redesign (L), Final iteration of redesign (R)</p>
            {/* <p className={styles.overviewText}>In my final redesign, I focused on maintaining the compactness of the table and information, while reframing it into a more universal and familiar format (especially for developers). I removed the macro-navigation panel and made the table display each of the highest-level components in order of which they were tested. Dropdowns were reintroduced for pages and containers to allow intuitive navigation, extremely similar to file structures both visually and operationally.
            I also moved test results to be closer to the labels for better information heirarchy, with the less important data of times ested being furthest away. One last but important design decision I made was to add a border around the error portion of the test results for a component if it had one or more errors associated with it. I also introduced a few more filtering options for users to even further customize their workflow and ensure they were able to find the information they needed as quickly as possible.</p> */}
            <p className={styles.overviewText}>In my final redesign, I focused on maintaining the compactness of the table and information, while reframing it into a more universal and familiar format (especially for developers).</p>
            {/* <p className={styles.overviewText}>In my final round of user testing, I found that my design did what I had hoped to achieve by allowing users to much more quickly navigate the large amount of data in a test. They were able to quickly understand the format of the table presented to them and how to use it to find the errors they wished to find much faster.</p>
            <p className={styles.overviewText}>This final design achieved a professional look, the ability to easily distinguish between different element types, familiar and organized filtering options, large amounts of data displayed at once, easy navigation, a familiar format, and a quick and intuitive way to find errors that needed to be fixed. I was really proud of this result.</p> */}
            <h6 class={styles.sectionHeader}>Card redesign</h6>
            <p className={styles.overviewText}>I also got to work on redesigning cards, which are a common sight when navigating ASTA's UI. Cards in ASTA are used to detail information about each action taken by the testing agnent while evaluating a website, are used to display detailed information about the results of each of these actions, and are used to display information about each component on the website tested by the agent.</p>
            {/* <p className={styles.overviewText}>Mr. Isaac hoped to make the cards more professional, matching the new model page design, and more intuitive to enable users to find the information they needed as quickly as possible.</p> */}
            <p style={{marginBottom: -16}} className={styles.overviewText}>Example: The "Log Entry" card. This card would display information on an action the testing agent took when evaluating the site given by the user. I focused on reorganizing the information architecture to be more human and intuitive and, in the process, cleaning up the visual design.</p>
            <img className={styles.csImgwt} src={LogCard}></img>
            {/* <p className={styles.overviewText}>I did the same for the "Rule Scenario Result" cards and the webpage component cards.</p>
            <img className={styles.csImgwt} src={Cards}></img>
            <p className={styles.overviewText}>Each of these redesigns was met with positive feedback from every user I discussed them with, which was amazing!</p> */}
            <h6 class={styles.sectionHeader}>Reflections</h6>
            <p className={styles.overviewText}>ASTA was my first experience truly diving into the design process, using UX principles like <a style={{color: "#16243B"}} target="_blank" href="https://www.ooux.com/what-is-ooux">Sophia Prater's OOUX design principle</a>, and conducting user interviews to support an iterative process of devloping a design solution. It was an amazing experience for me and planted the seed for my focus on process, which would flourish in my next project, NeverDMCA!</p>
            <p className={styles.overviewText}>Check out NeverDMCA ↓</p>
            <Link exact to="/neverdmca"><img className={styles.bImg} src={NB}></img></Link>
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

export default BPS