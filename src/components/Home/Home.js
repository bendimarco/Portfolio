import React from "react";
import styles from "./Home.module.css";

import Memento from "../../img/memento-img.png"
import ASTA from "../../img/asta-img.png"
import WebPoint from "../../img/webpoint-img.png"
import Blender from "../../img/blender-img.png"
import LP from "../../img/lp-img.png"
import NeverDMCA from "../../img/ndmca-img.png"
import Misc from "../../img/misc-img.png"

import Chihiro from "../../img/chihiro.png";
import Tadao from "../../img/tadao.png";
import Tyler from "../../img/tyler.png";
import Yuval from "../../img/yuval.png";
import Chamath from "../../img/chamath.png";
import DeathsDoor from "../../img/deathsdoor.png";
import Joji from "../../img/joji.png";
import Hisaishi from "../../img/hisaishi.png";
import { useState } from "react";
import useMousePosition from "../Hooks/UseMousePosition"

const Home = ({ theme }) => {

  let projects = [
    {title:'Learn Prompting', desc:"The largest beginner friendly guide and educational resource for the emerging field of prompt engineering.", start:'Apr. 2023', end:'Present', role:'Design Lead, UI/UX Designer'},
    {title:'BPS ASTA', desc:"Web app testing agent that performs completely autonomous functional testing of enterprise applications.", start:'May 2022', end:'Aug. 2022', role:'UI/UX Designer, Front-end Developer'},
    {title:'Memento', desc:"First NFT marketplace to allow checkout with credit card and direct minting to ethereum wallets.", start:'Oct. 2021', end:'May 2022', role:'Co-Founder, Design Lead'},
    {title:'NeverDMCA', desc:"Generative AI model that allows content creators to create unique, fully customized music for their videos, 100% copyright free.", start:'Jun. 2023', end:'Present', role:'Co-Founder, Design Lead'},
    {title:'WebPoint', desc:"Volunteer organization that created websites for local businesses, and gave students web development experience.", start:'Mar. 2020', end:'Aug. 2021', role:'Co-Founder'}];

  let projectsAlt = [
    {title:'3D Modeling', desc:"", start:'Jan. 2023', end:'Present', role:'Blender Fun'},
    {title:'Misc. Work', desc:"", start:'Oct. 2020', end:'Present', role:'Everything Else'}];
    
  let interests = [
      {title:'Spirited Away', desc:"Studio Ghibli Film"},
      {title:'Yuval Noah Harari', desc:"Author of \"Sapiens\""},
      {title:'Chamath Palihapitiya', desc:"Co-Host of the \"All-In\" Podcast"},
      {title:'Tadao Ando', desc:"Minimalist Japanese Architect"},
      {title:'Death\'s Door', desc:"Indie Adventure Game"},
      {title:'Joji', desc:"Experiemntal R&B Artist"},
      {title:'Joe Hisaishi', desc:"Composer for Studio Ghibli"},
      {title:'Tyler, the Creator', desc:"Songwriter, Producer, Performer"}];
      

  const [hoveringProj, setHoveringProj] = useState(false);
  const [hoveringProjAlt, setHoveringProjAlt] = useState(false);
  const [hoveringInterest, setHoveringInterest] = useState(false);
  const [projHovered, setProjHovered] = useState(0);
  const [projAltHovered, setProjAltHovered] = useState(0);
  const [interestHovered, setInterestHovered] = useState(0);

  const mousePos = useMousePosition();

  return (
    <div 
      className={[styles.page].join(' ')}>
        {/* style={{left: mousePos.x, top: mousePos.y, }} */}
      <div className={hoveringProj || hoveringProjAlt || hoveringInterest ? [styles.cursor, styles.cursorvisible].join(' ') : styles.cursor}  >
      {hoveringProj ? 
      <>
        <p className={styles.hoverProjName}>{projects[projHovered].title}</p>
        <p className={styles.hoverProjRole}>{projects[projHovered].role}</p>
        <p className={styles.hoverProjDesc}>{projects[projHovered].desc}</p>
        {/* <p className={styles.hoverProjDesc}>The largest beginner-freindly guide to prompt engineering</p> */}
          <div className={styles.hoverDates}>
            <p> {projects[projHovered].start} - <span className={projects[projHovered].end === 'Present' ? styles.white : styles.lightGray}>{projects[projHovered].end}</span></p>
            {/* {projects[projHovered].end === 'Present' ?  */}
            <div className={projects[projHovered].end === 'Present' ? [styles.statusIcon, styles.statusPresent].join(' ') : styles.statusIcon}/>
          </div>
          <p className={styles.hoverClickText}>Case study →</p>
          {/* → */}
        </> 
        : hoveringProjAlt ? 
        <>
          <p className={styles.hoverProjName}>{projectsAlt[projAltHovered].title}</p>
          {/* <p className={styles.hoverProjRole}>{projectsAlt[projAltHovered].role}</p> */}
          <div className={styles.hoverDates}>
          <p> {projects[projHovered].start} - <span className={projectsAlt[projAltHovered].end === 'Present' ? styles.white : styles.lightGray}>{projectsAlt[projAltHovered].end}</span></p>
            <div className={projectsAlt[projAltHovered].end === 'Present' ? [styles.statusIcon, styles.statusPresent].join(' ') : styles.statusIcon}/>
          </div>
          <p className={styles.hoverClickText}>View →</p>
        </>
        : hoveringInterest ? 
        <>
          <p className={styles.hoverProjName}>{interests[interestHovered].title}</p>
          <p className={styles.hoverProjRole}>{interests[interestHovered].desc}</p>
        </> 
      : <></>}
      </div>
      <div className={styles.introContainer}>
        <h1 className={styles.helloText}>Hi, I'm Ben DiMarco, a Computer Science student and UI/UX Designer specializing in Visual Design.</h1>
        <h2 className={styles.studentText}>
          I work to reduce interfaces to their essentials, designing with a focus on simplicity.
        </h2>
        {/* <div className={styles.introHighlight} /> */}
      </div>

      <div className={styles.interestsContainer}>
        <div className={styles.mementoImgContainer}>
          <img className={styles.mementoImg} src={Memento} onMouseEnter={() => {setProjHovered(2); setHoveringProj(true)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
        </div>
        <div className={styles.flex} >
          <div className={styles.workLeftContainer}>
            <div className={styles.workImgContainer}>
              <img className={styles.astaImg} src={ASTA} onMouseEnter={() => {setProjHovered(1); setHoveringProj(true)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
            </div>
            <div className={styles.workImgContainer}>
              <img className={styles.webpointImg} src={WebPoint} onMouseEnter={() => {setProjHovered(4); setHoveringProj(true)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
            </div>
            <div className={styles.workImgContainer}>
              <img className={styles.blenderImg} src={Blender} onMouseEnter={() => {setProjAltHovered(0); setHoveringProjAlt(true)}} onMouseLeave={() => {setHoveringProjAlt(false);}}></img>
            </div>
          </div>
          <div className={styles.workRightContainer}>
            <div className={styles.workImgContainer}>
              <img className={styles.lpImg} src={LP} onMouseEnter={() => {setProjHovered(0); setHoveringProj(true)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
            </div>
            <div className={styles.workImgContainer}>
              <img className={styles.blenderImg} src={NeverDMCA} onMouseEnter={() => {setProjHovered(3); setHoveringProj(true)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
            </div>
            <div className={styles.workImgContainer}>
              <img className={styles.miscImg} src={Misc} onMouseEnter={() => {setProjAltHovered(1); setHoveringProjAlt(true)}} onMouseLeave={() => {setHoveringProjAlt(false);}}></img>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutTextContainer}>
          <h2 className={styles.aboutText}>
            Music, architecture, animation, and nature are my artistic inspiration and infuse my work.
          </h2>
          <h2 className={styles.aboutText}>
            Currently Expanding my knowlegde of photography, videography, 3d
            modeling, and AR
          </h2>
        </div>

      <div className={styles.interestsContainer}>

        <div className={styles.inspoTopContainer}>
          <div className={styles.vertContainer}>
            <img className={styles.vertImg} src={Chihiro} onMouseEnter={() => {setInterestHovered(0); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
            <img className={styles.vertImg} src={Tadao}   onMouseEnter={() => {setInterestHovered(3); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
            <img className={styles.vertImg} src={Tyler}  onMouseEnter={() => {setInterestHovered(7); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
          </div>

          <div className={styles.horizContainer}>
            <div className={styles.threeContainer}>
              <div className={styles.yuvalImgContainer}>
                <img className={styles.yuvalImg} src={Yuval} onMouseEnter={() => {setInterestHovered(1); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
              </div>
              <div className={styles.threeSideConatiner}>
                <div className={styles.chamathImgContainer}>
                  <img className={styles.chamathImg} src={Chamath} onMouseEnter={() => {setInterestHovered(2); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
                </div>
                <div className={styles.ddImgContainer}>
                  <img className={styles.ddImg} src={DeathsDoor}  onMouseEnter={() => {setInterestHovered(4); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
                </div>
              </div>
            </div>
            <div className={styles.twoContainer}>
              <img className={styles.jojiImg} src={Joji}  onMouseEnter={() => {setInterestHovered(5); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
              <img className={styles.hisaishiImg} src={Hisaishi}  onMouseEnter={() => {setInterestHovered(6); setHoveringInterest(true)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
            </div>
          </div>
        </div>
        <div className={styles.aboutTextContainer}>
          <h2 className={styles.aboutText}>
                Get in touch at <a span style={{textDecoration: 'underline', cursor: 'pointer'}}>bencdimarco@gmail.com</a>
          </h2>
          <h2 className={styles.aboutText}>
            (Open for work)
          </h2>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
