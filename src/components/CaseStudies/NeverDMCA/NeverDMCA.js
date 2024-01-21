import { useState, useCallback } from 'react'
import Banner from './img/NDMCAbanner.png'
import FinalDisplay from "./img/findisp.png"
import Templates from "./img/templates.png"
import Itr from "./img/itr.png"
import Up from "./img/up.png"
import Comp from "./img/comp.png"
import ND1 from "./img/nd1.png"
import ND2 from "./img/nd2.png"
import Diag from "./img/diag.jpeg"
import ND3 from "./img/nd3.png"
import One from "./img/nd1.svg"
import Two from "./img/nd2.svg"
import Three from "./img/nd3.svg"
import Four from "./img/nd4.svg"
import Five from "./img/nd5.svg"
import Six from "./img/nd6.svg"
import Seven from "./img/nd7.svg"
import Sketch from "./img/sketch.png"
import Flow from "./img/flowhf.png"
import Flow1 from "./img/flow1.png"
import Flow2 from "./img/flow2.png"
import Flow3 from "./img/flow3.png"
import PreGen from "./img/pregen.png"
import PostGen from "./img/postgen.png"
import Vid from "./img/testvideo.mp4"
import LB from "./img/lb.png"
import Footer from "../../Nav/Footer"
import Resume from "../../../img/BenDiMarcoResume2024.pdf"

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import styles from "./NeverDMCA.module.css";

const NeverDMCA = () => {

    // const [detailActive, setDetailActive] = useState(false);
    // const [detailImg, setDetailImg] = useState(Comp);
  
    // const detailActivate = useCallback((src) => {
    //   setDetailImg(src)
    //   setDetailActive(true)
    // }, [detailActive]);

    // const detailNullify = useCallback(() => {
    //   setDetailActive(false)
    // }, [detailActive]);

    return (
        <div className={styles.body}>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
            margin-top: -50px;
            position:relative;
            overflow-x: hidden;
          }
        `}</style>
          {/* Banner */}
          <div className={styles.bannerDiv}>
            <img className={styles.bannerImg} src={Banner} alt="NeverDMCA Banner"/>
          </div>
          {/* Text Container */}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>NeverDMCA</h1>
            {/* Dates, Role */}
            <div className={styles.attrLabels}>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Dates</p>
                    <p className={styles.attrT}>Ju 2023 - Aug 2023</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>Role</p>
                    <p className={styles.attrT}>Design Lead</p>
                </div>
                <div className={styles.attr}>
                    <p className={styles.attrLabel}>&#x200B;</p>
                    <p className={styles.attrT}>Creative Direction / UX / UI / SWE</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            {/* <iframe className={styles.vid} src={Vid} ></iframe> */}
            {/* Project Overview */}
            <p className={styles.overviewText}>
                During the summer of 2023, I worked alongside two software engineers to build, design, and creatively lead NeverDMCA, an AI music generation platform that would go on to partner with <a style={{color: "#999CAC"}} target="_blank" href="https://www.youtube.com/@woodyandkleiny">Woody and Kleiny</a>
            </p>
            <h6 class={styles.sectionHeader}>Starting from Scratch</h6>
            <p className={styles.overviewText}>When I began working on NeverDMCA, it was just a generative AI model. Its interface was a text box. Because of this, it was the perfect time to use the <a style={{color: "#999CAC"}} target="_blank" href="https://www.thefountaininstitute.com/blog/what-is-the-double-diamond-design-process">Double Diamond Design Process</a> to build an interface from the ground up for the model to be accessible to users.</p>
            <h6 class={styles.sectionHeader}>Competitive Analysis</h6>
            <p className={styles.overviewText}>To determine how to begin designing an interface, I started by analyzing the current options for getting DMCA-free music for creative projects.</p>
            <img className={styles.csImg} src={Comp}></img>
            <p className={styles.imgSubtext}>The red zone is technical and generic, you don't want to be there. The goal would be to end up in the simple, yet personal quadrant.</p>
            <p className={styles.overviewText}>Artlist and Epidemic Sounds: Platforms like these are the most common ways creators find copyright-free music for their projects. They offer a large library of usable music in exchange for a monthy fee. While their libraries are somewhat large, there is no way to ensure you will find a song that fits your project exactly right. And additionally, since many creators use these platforms, most of the high-quality tracks will most likely have been heard by others before.
            On top of all this, the amount of music you will ever need to use out of the vast library of these services is so small (especially if you aren't actively making videos at all times), making the high cost difficult to justify.</p>
            <p className={styles.overviewText}>Copyright-free YouTube Videos: Free YouTube videos offer a solid alternative to large platforms; however, selection is far more limited, and the chance others have heard the songs you wish to use is much higher due to this. Additionally, determining which videos are actually free for use and how to attribute credit to the artist if it is required can be difficult and stressful if you don't have a solid understanding of copyright law.</p>
            <p className={styles.overviewText}>Creating your own music: For nearly all creators, creating their own music from scratch is not a possibility due to the incredibly high and niche skill required to do so. Additionally, music creation software such as DAWs have higher costs than copyright-free music libraries. The one obvious advantage of creating your own music is the control and uniqueness it provides.</p>
            <p className={styles.overviewText}>Facebook Music Gen Model: The Facebook Music Gen Model is amazing in that, for the first time, it provided creators with the ability to create unique and custom music without needing to make everything from scratch, all copyright-free and at a low cost. However, the interface and prompting experience is very unfamiliar and uninviting to non-technical users, and generations are not tailored to video content specifically.</p>

            <p className={styles.overviewTextb}>The sweet spot was creating a product that was as simple as Artlist to use but provided the personalization and low cost of generative AI models.</p>
            {/* <img className={styles.csImgwt} src={FinalDisplay}></img>
            <img className={styles.csImg} src={Itr}></img> */}
            {/* <img className={styles.csImg} src={Templates}></img> */}
            <h6 class={styles.sectionHeader}>Looking at the User</h6>
            <p className={styles.overviewText}>After deciding on a direction, I created user personas to detail the specific goals and painpoints that I could address.
            </p>
            <img className={styles.csImg} src={Up}></img>
            <p className={styles.imgSubtext}>User personas</p>
            <p className={styles.overviewText}>I decided to focus on creating the most simplified and minimal experience possible for music generation. And I wanted my design language to reflect this simplicity and minimalism. I also wanted the design to stand out as unique in a marketplace saturated with very corporate-y designs and interfaces.</p>
            <p className={styles.overviewText}>I wanted people to feel like they were using something on the cutting edge that was specifically built for them. Something with only the essential features that they needed. I wanted people to have fun using it and for the interface to bring out the inner child and creativity.
            </p>
            <h6 class={styles.sectionHeader}>Inital Design</h6>
            <p className={styles.overviewText}>In my initial design, I focused on creating a simplified interface and flow for music generation that was not overwhelming but still had essential components to give users fine-tooth control over their generations.
            </p>
            <img className={styles.csImgwt} src={ND1}></img>
            
            <h6 class={styles.sectionHeader}>Features</h6>
            <p className={styles.overviewText}>
            <ul><li className={styles.li1}>A prompt box that provides users with as much or as little detailed control over their generation.</li>
            <li className={styles.li2} style={{marginTop: 8}}>A fine-tuning section to take some of the pressure off of the prompting section and allow users a simpler way to describe what they wish to create.</li>
            <li className={styles.li3} style={{marginTop: 8}}>A feature that allows creators to open an in-app video player to test out how different generations work with the video they are creating. </li>
            <li className={styles.li4} style={{marginTop: 8}}>A simple and prominent call to action to allow users to start a generation with details about how many free generations they have left directly undeneath.</li>
            <li className={styles.li5} style={{marginTop: 8}}>A container in the center of the screen to allow a space for users to view their generations. Generations were given a randomized abstract image as art to help visually distinguish them from others.</li>
            <li className={styles.li6} style={{marginTop: 8}}>A few more technical parameters for more detailed generations. I purposely distanced them from the other prompting controls to not overwhelm first-time users.</li>
            <li className={styles.li7} style={{marginTop: 8}}>A label to tell users approximately how long they would have to wait for their generation.</li>
            </ul>
            </p>
            <p className={styles.overviewText}> To determine both pain points and successes, I conducted multiple user interviews as well as viewed detailed usage logs from <a style={{color: "#B0B2BC"}} target="_blank" href="https://posthog.com/">Posthog</a>. </p>
            <h6 class={styles.sectionHeader}>Sucesses</h6>
            <p style={{color: '#48FF9C'}} className={styles.overviewText}><ul style={{marginBottom: -16}}><li>Users easily located the prompt box and felt comfortable using the fine-tuning options.</li>
            <li style={{marginTop: 8}}>Users thought the design was unique and professional.</li></ul></p>
            <h6 class={styles.sectionHeader}>Pain Points</h6>
            <p style={{color: '#FF7C7C'}} className={styles.overviewText}><ul><li>Users thought uploading a video was required for generation. So if they didn't have a specific video ready, they would not proceed.</li>
            <li style={{marginTop: 8}}>Users were overwhelmed with the number of features and text on the screen. </li>
            <li style={{marginTop: 8}}>No users noticed the "Generation Times" label on first use. </li>
            <li style={{marginTop: 8}}>A subset of users who had no previous AI prompting experience did not understand how to prompt.</li>
            </ul>
            </p>
            <h6 class={styles.sectionHeader}>Refined Design</h6>
            <p className={styles.overviewText}>To refine my initial design, I focused on addressing each of the pain points I had discovered. I decided to make the left sidebar of the interface contain all of the required components for prompting and generating.
            This way, the complexity could be contained and followed intuitively. 
            Thus, the right sidebar would contain non-required components, so I thought it would be the best place to move the video feature.
            That left the middle of the screen for users to browse their generations or look at example prompts.
            </p>
            <img className={styles.csImgwt} src={Diag}></img>
            <p className={styles.imgSubtext}>A low-fidelity mockup of the refined design with colored labels to distinguish the different areas of the interface.</p>
            <p className={styles.overviewText}>And with this, I developed a new high-fidelity mockup for the interface.</p>
            <img className={styles.csImgwt} src={ND2}></img>
            <p className={styles.imgSubtext}>The high-fidelity mockup I developed based off of my drawing.</p>
            
            <h6 class={styles.sectionHeader}>Modifications to the Inital Design </h6>
            <p className={styles.overviewText}>
            <ul><li className={styles.li1}>A mimimized labeling system with information icons instead of subtitles. This decreased the information overload on users while still providing them with the ability to get more information on each feature if they were ever confused. I also added a purple accent to the prompt box to make it stand out even more as the place to begin prompting.</li>
            <li className={styles.li2} style={{marginTop: 8}}> An updated generation container with 3 sections. One section with example prompts (templates) for users to browse, one section for all of the users own generations, and one section for viewing any generations favorited by the user.</li>
            <li className={styles.li3} style={{marginTop: 8}}>A new location for the "Generation Times" label to make it more prominent for users and to allow users to see how increasing generation length affects the generation time.</li>
            <li className={styles.li4}style={{marginTop: 8}}>A new location and look for the test video feature. </li>
            </ul>
            </p>
            <h6 class={styles.sectionHeader}>Sucesses</h6>
            <p style={{color: '#48FF9C'}}className={styles.overviewText}>
            <ul><li>Users reported being much less overwhelmed with the interface overall.</li> 
            <li style={{marginTop: 8}}>Users understood and were able to use the information icons. </li>
            <li style={{marginTop: 8}}>Users were easily able to find the "Generation Times" label and mentally connect it to the generation length.</li>
            <li style={{marginTop: 8}}>Users also no longer got caught up on the video test feature, leading to a much smoother generation process and more enjoyment and exploration of the video feature. People had a lot of fun with it and did not feel intimidated.</li></ul>
            </p>
            <h6 class={styles.sectionHeader}>Pain Points</h6>
            <p style={{color: '#FF7C7C'}} className={styles.overviewText}>
            <ul><li>The display of generations was very confusing at first glance, as they showed no information until hovered.</li> <li style={{marginTop: 8}}>Those users who were confused by the entire process of prompting still didn't understand or feel comfortable getting started. This was my primary concern.</li></ul>
            </p>
            <h6 class={styles.sectionHeader}>A Better Way to Get Started</h6>
            <p className={styles.overviewText}>To make the prompting experience more accessible and guided, we decided to adopt a template format for prompting.
            This would allow users who have never used a generative AI model before to have a friendly and familiar format for creation, while allowing those familiar to still prompt from scratch.
            To do this, we replaced the example cards with template cards. </p>
            <p className={styles.overviewText}>Behind the scenes, templates would simply modify the prompt of a user. This would both abstract the complexity away from the user and give them better generations. When a user clicked a template card, it would open a pop-up window to allow the user to provide specific details about the video they are generating music for. They would then directly generate from that pop-up, and all of the information they input would be used to create their generation.</p>
            <p className={styles.overviewText}>Additionally, a remix feature would allow users to go back to the template (with all of their previous answers saved) to make small adjustments and get the perfect sound.</p>
            <img className={styles.csImgwt} src={Sketch}></img>
            <p className={styles.imgSubtext}>A quick user flow sketch to outline how users will be able to use templates for a more beginner-friendly prompting experience.</p>
          
            <h6 class={styles.sectionHeader}>New Template Section</h6>
            <p className={styles.overviewText}>To combat the confusion of the previous example cards, the template page has highly detailed cards describing how each template is engineered to sound and what kind of video it can be used for. Additionally, when hovered, the card gives the user a CTA to begin creating music.</p>
            <p className={styles.overviewText}>To minimize the information on the screen, the advance prompt settings were added to a drop-down that is easily found by advanced users but not intimidating for beginners.</p>
            <p className={styles.overviewText}>Additionally, creators would be able to create their own custom templates that generated music in the style they loved for their own videos, allowing users to get the same sound as their favorite content creators.</p>
            <img className={styles.csImgwt} src={Flow1}></img>
            <h6 class={styles.sectionHeader}>Assisted Promtping</h6>
            <p className={styles.overviewText}>After clicking on a template, users would be taken to a simple pop-up window that asked them general questions pertaining to the type of video they were planning to create. This would consist of template-specific questions to begin and an "Additional Details" section, which would allow the same detail as the traditional prompting experience, but in an optional format.</p>
            <img className={styles.csImgwt} src={Flow2}></img>
            <h6 class={styles.sectionHeader}>New generations section</h6>
            <p className={styles.overviewText}>Once a user created a generation, it would take them to the generations section, where they could see all of their generations. 
           I did an entire rework of this section to maximize the number of generations visible to the user while making them extremely easy to navigate through.</p>
            <img className={styles.csImgwt} src={Flow3}></img>
            <h6 class={styles.sectionHeader}>Displaying Generations</h6>
            <p className={styles.overviewText}>Coming up with a format for displaying the generations turned out to be a real challenge. The main problem was that the primary descriptor of a generation would be its prompt. But these were often extremely long and hard to distinguish (especially if there were similar generations). Also, if a user used a template, then this prompt would not be familiar to them.
             Additionally, displaying multiple generations in a compact format only added to this confusion.
            </p>
            <img className={styles.csImgwt} src={PreGen}></img>
            <h6 class={styles.sectionHeader}>Image Based Identification</h6>
            <p className={styles.overviewText}>To solve this, I decided to switch from a text-based identification system to an image-based identification system. </p>
            <p className={styles.overviewText}>To create the images for each set of generations, we save a static set of images for each template category. Then, we randomly cut a small square out of that image to use for each generation in a set. So every generation in a set will be displayed as a small section of the same image. This way, all generations from a single set are both visually distinct from other sets (and visually connected to their own set), but also individually distinct as well.</p>
            <p className={styles.overviewText}>This new format provided a few major improvements:
            <ol>
              <li>It was the most compact of all formats (it displayed the highest # of generations).</li>
              <li style={{marginTop: 8}}>It was easy to see which template was used for a generation (and how to remix said generation).</li>
              <li style={{marginTop: 8}}>It inherently made creating new generations from an existing template easy and intuitive.</li>
              <li style={{marginTop: 8}}>It made it possible for multiple generations to be created in a set from a single prompt or template.</li>
              <li style={{marginTop: 8}}>And all features are prominently and intuitively located.</li>
              </ol></p>
            <img className={styles.csImgwt} src={PostGen}></img>
            <h6 class={styles.sectionHeader}>High-fidelity Flow</h6>
            <p className={styles.overviewText}>Putting it all together, this is what the final high-fidelity flow looked like.</p>
            <img className={styles.csImgwt} src={Flow}></img>
            <h6 class={styles.sectionHeader}>Bonus: Video Player!</h6>
            <p className={styles.overviewText}>One of my favorite little things I got to make for NeverDMCA was the in-app video player. This video player allowed for dragging, resizing, a switch in aspect ratio, and volume controls to change volume relative to music volume inside the app. All wrapped together in a minimal retro style.</p>
             <iframe playlist="" frameborder="0" src={Vid} className={styles.vid} loop mute></iframe>
            <h6 class={styles.sectionHeader}>Reflections</h6>
            <p className={styles.overviewText}>NeverDMCA was amazing, as it allowed me to experience the entire product design and development process. I was able to experience and execute each step. Following the <a style={{color: "#999CAC"}} target="_blank" href="https://www.thefountaininstitute.com/blog/what-is-the-double-diamond-design-process">Double Diamond Design Process</a>, I was able to complete a competitive analysis, define the problem for our product to solve, develop user personas, ideate on initial designs, conduct user interviews (and collect user usage data), iterate to come to a final design, and ultimately develop my design solution.
            Being able to be so involved in each of these steps taught me so much and made me much more comfortable with the full process of design. Which takes me to where I am now at Learn Prompting!</p>
            
            <p className={styles.overviewText}>Check out Learn Prompting ↓</p>
            <Link exact to="/learnprompting"><img className={styles.bImg} src={LB}></img></Link>
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

export default NeverDMCA