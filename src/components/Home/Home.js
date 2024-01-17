import styles from "./Home.module.css";
import React from "react";

import Memento from "../../img/lpnew.png"
import LPMobile from "../../img/lpmobile.png"
import ASTA from "../../img/asta-img2.png"
import WebPoint from "../../img/webpoint-img.png"
import Blender from "../../img/blender-img.png"
import LP from "../../img/mementonew.png"
import NeverDMCA from "../../img/ndmca-img.png"
import Misc from "../../img/misc-img.png"
import ME from "../../img/Ben DiMarco.png"

import Footer from '../../components/Nav/Footer';
import Chihiro from "../../img/chihiro.png";
import Tadao from "../../img/tadao.png";
import Tyler from "../../img/tyler.png";
import Yuval from "../../img/yuval.png";
import Chamath from "../../img/chamath.png";
import DeathsDoor from "../../img/deathsdoor.png";
import Joji from "../../img/joji.png";
import Hisaishi from "../../img/hisaishi.png";
import { useState, useEffect } from "react";
import useMousePosition from "../Hooks/UseMousePosition"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import NDMCA from "../CaseStudies/NeverDMCA/NeverDMCA"
// import MementoCS from "../CaseStudies/Memento/Memento"
// import BPS from "../CaseStudies/BPS/BPS"

let projects = [
  {title:'Memento', desc:"First NFT marketplace to allow checkout with credit card and direct minting to ethereum wallets.", start:'Oct 2021', end:'Apr 2022', role:'Co-Founder, Design Lead'},
  {title:'BPS ASTA', desc:"Web app testing agent that performs completely autonomous functional testing of enterprise applications.", start:'May 2022', end:'Aug 2022', role:'UI/UX Designer, Front-end Developer'},
  {title:'Learn Prompting', desc:"The largest beginner friendly guide and educational resource for the field of prompt engineering.", start:'Apr 2023', end:'Present', role:'Design Lead'},
  {title:'NeverDMCA', desc:"Generative AI model that allows content creators to create unique, fully customized music for their videos, 100% copyright free.", start:'Jun 2023', end:'Aug 2023', role:'Design Lead'},
  {title:'WebPoint', desc:"Volunteer organization that created websites for local businesses, and gave students web development experience.", start:'Mar 2020', end:'Aug 2021', role:'Co-Founder'}];

let projectsAlt = [
  {title:'3D Modeling', desc:"", start:'Aug 2023', end:'Present', role:'Blender Fun'},
  {title:'Misc. Work', desc:"", start:'Oct 2020', end:'Present', role:'Everything Else'}];
  
let interests = [
    {title:'Spirited Away', desc:"Studio Ghibli Film"},
    {title:'Yuval Noah Harari', desc:"Author of \"Sapiens\""},
    {title:'Chamath Palihapitiya', desc:"Co-Host of \"The All-In Podcast\""},
    {title:'Tadao Ando', desc:"Minimalist Japanese Architect"},
    {title:'Death\'s Door', desc:"Indie Adventure Game"},
    {title:'Joji', desc:"Experiemntal R&B Artist"},
    {title:'Joe Hisaishi', desc:"Composer for Studio Ghibli"},
    {title:'Tyler, the Creator', desc:"Songwriter, Producer, Performer"}];

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

const Home = () => {

  const [currentTrack, setCurrentTrack] = useState(null);
  const [lastTrack, setLastTrack] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY; 
  const user = process.env.REACT_APP_USER;

  useEffect(() => {
      const fetchNowPlaying = async () => {
          try {
              const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${user}&api_key=${apiKey}&format=json&limit=1`);
              const data = await response.json();
              const track = data.recenttracks.track[0];
              
              setLastTrack(track);
              if (track["@attr"] && track["@attr"].nowplaying) {
                  setCurrentTrack(track);
              } else {
                setCurrentTrack(null);
              }
          } catch (error) {
              console.error('Error fetching data from Last.fm:', error);
          }
      };

      fetchNowPlaying();
      const interval = setInterval(fetchNowPlaying, 60000); // Refresh every 60 seconds

      return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const [hoveringProj, setHoveringProj] = useState(false);
  const [hoveringProjAlt, setHoveringProjAlt] = useState(false);
  const [hoveringInterest, setHoveringInterest] = useState(false);
  const [projHovered, setProjHovered] = useState(0);
  const [projAltHovered, setProjAltHovered] = useState(0);
  const [interestHovered, setInterestHovered] = useState(0);
  const [name, setName] = useState(false)

  const [numHovers, setNumHovers] = useState(0)

  return (
    <div 
      className={[styles.page].join(' ')}>
      <div className={hoveringProj || hoveringProjAlt || hoveringInterest ? [styles.cursor, styles.cursorvisible].join(' ') : styles.cursor} >
      {hoveringProj ? 
      <>
        <p className={styles.hoverProjName}>{projects[projHovered].title}</p>
        {/* <p className={styles.hoverProjDesc}>{projects[projHovered].desc}</p> */}
        {/* <p className={styles.hoverProjDesc}>The largest beginner-freindly guide to prompt engineering</p> */}
        {/* <p className={styles.hoverProjRole}>{projects[projHovered].role}</p> */}
          <div className={styles.hoverDates}>
            <p> {projects[projHovered].start} - <span className={projects[projHovered].end === 'Present' ? styles.white : styles.lightGray}>{projects[projHovered].end}</span></p>
            {/* {projects[projHovered].end === 'Present' ?  */}
            <div className={projects[projHovered].end === 'Present' ? [styles.statusIcon, styles.statusPresent].join(' ') : styles.statusIcon}/>
          </div>
          {/* <p className={styles.hoverClickText}>Click to view </p> */}
          {/* → */}
        </> 
        : hoveringProjAlt ? 
        <>
          <p className={styles.hoverProjName}>{projectsAlt[projAltHovered].title}</p>
          {/* <p className={styles.hoverProjRole}>{projectsAlt[projAltHovered].role}</p> */}
          <div className={styles.hoverDates}>
          <p> {projectsAlt[projAltHovered].start} - <span className={projectsAlt[projAltHovered].end === 'Present' ? styles.white : styles.lightGray}>{projectsAlt[projAltHovered].end}</span></p>
            <div className={projectsAlt[projAltHovered].end === 'Present' ? [styles.statusIcon, styles.statusPresent].join(' ') : styles.statusIcon}/>
          </div>
          {/* <p className={styles.hoverClickText}>Click to view</p> */}
        </>
        : hoveringInterest ? 
        <>
          <p className={styles.hoverProjName}>{interests[interestHovered].title}</p>
          <p className={styles.hoverInspoSubtext}>{interests[interestHovered].desc}</p>
        </> 
      : <></>}
      </div>
      <div className={styles.introContainer}>
        <div className={styles.spotifyDiv}>
          {currentTrack
          ? <div className={styles.spotifyCircle}>
            <div className={styles.spotifyLine1}></div>
            <div className={styles.spotifyLine2}></div>
            <div className={styles.spotifyLine3}></div>
          </div>
          : 
          <div className={styles.spotifyCircle}>
          </div>
          }
          {currentTrack 
          ? 
          <p className={styles.spotifyText}>Listening to {currentTrack.name}, by {currentTrack.artist["#text"]}</p>
          // <p className={styles.spotifyText}><a style={{textDecoration: "none", color: "#0CF4A3"}} href={currentTrack.url} target="_blank">Listening to {currentTrack.name}, by {currentTrack.artist["#text"]}</a></p>
          : <p style={{color: "#444455"}} className={styles.spotifyText}>&#8203;</p>
          }
        </div>
          <h1 className={styles.helloText}>Hi, I'm <span className={styles.nameDiv} onMouseEnter={() => {setName(true)}} onMouseLeave={() => {setName(false)}}>
            Ben DiMarco
            </span>, a computer science student and aspiring UI/UX designer specializing in visual design.</h1>
        {/* <h1 className={styles.helloText}>Hi, I'm Ben DiMarco, a computer science student and UI/UX designer in training. <br></br><span style={{fontWeight: '300'}}>I love what I do.</span></h1> */}
        <h2 className={styles.studentText}>
          I like to reduce interfaces to their essentials, designing with a focus on simplicity.
        </h2>
        {/* <div className={styles.introHighlight} /> */}
      </div>

      {numHovers >= 1 ? <div className={styles.spotlight}> </div> : <></>}
      {name ? 
        <div className={styles.me}>
          <img className={styles.meImg} src={ME}></img>
        </div> : <></> }
        <div className={styles.info}>
          <p>Resume</p>
          <p>Resume</p>
          <p>Resume</p>
          <p>Resume</p>
        </div>

      <div className={styles.interestsContainer}>
        <div className={styles.mementoImgContainer}>
          <Link exact to="/learnprompting">
            <img className={styles.mementoImg} src={Memento} onMouseEnter={() => {setProjHovered(2); setHoveringProj(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringProj(false);}}></img> 
          </Link>
        </div>
        <div className={styles.flex} >
          <div className={styles.workLeftContainer}>
            <div className={styles.workImgContainer}>
              <Link exact to="/bps">
                <img className={styles.astaImg} src={ASTA} onMouseEnter={() => {setProjHovered(1); setHoveringProj(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
              </Link>
            </div>
            <div className={styles.workImgContainer}>
              <Link exact to="/webpoint">
              <img className={styles.webpointImg} src={WebPoint} onMouseEnter={() => {setProjHovered(4); setHoveringProj(true)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
              </Link>
            </div>
            <div className={styles.workImgContainer}>
              <Link exact to="/3d">
              <img className={styles.blenderImg} src={Blender} onMouseEnter={() => {setProjAltHovered(0); setHoveringProjAlt(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringProjAlt(false);}}></img>
              </Link>
            </div>
          </div>
          <div className={styles.workRightContainer}>
          <div className={styles.workImgContainer}>
              <Link exact to="/neverdmca">
                <img className={styles.blenderImg} src={NeverDMCA} onMouseEnter={() => {setProjHovered(3); setHoveringProj(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
              </Link>
            </div>
            <div className={styles.workImgContainer}>
              <Link exact to="/memento">
                <img className={styles.lpImg} src={LP} onMouseEnter={() => {setProjHovered(0); setHoveringProj(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringProj(false);}}></img>
              </Link>
            </div>
            <a target="_blank" href="https://dribbble.com/bendimarco">
            <div className={styles.workImgContainer}>
              <img className={styles.miscImg} src={Misc} onMouseEnter={() => {setProjAltHovered(1); setHoveringProjAlt(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringProjAlt(false);}}></img>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.aboutTextContainer}>
          <h2 className={styles.helloText}>
            Music, architecture, animation, and nature are my artistic and personal inspiration.
          </h2>
          <h2 className={styles.aboutText}>Here are some of my favorites.</h2>
        </div>

      <div className={styles.interestsContainer}>

        <div className={styles.inspoTopContainer}>
          <div className={styles.vertContainer}>
            <img className={styles.vertImg} src={Chihiro} onMouseEnter={() => {setInterestHovered(0); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
            <img className={styles.vertImg} src={Tadao}   onMouseEnter={() => {setInterestHovered(3); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
            <img className={styles.vertImg} src={Tyler}  onMouseEnter={() => {setInterestHovered(7); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
          </div>

          <div className={styles.horizContainer}>
            <div className={styles.threeContainer}>
              <div className={styles.yuvalImgContainer}>
                <img className={styles.yuvalImg} src={Yuval} onMouseEnter={() => {setInterestHovered(1); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
              </div>
              <div className={styles.threeSideConatiner}>
                <div className={styles.chamathImgContainer}>
                  <img className={styles.chamathImg} src={Chamath} onMouseEnter={() => {setInterestHovered(2); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
                </div>
                <div className={styles.ddImgContainer}>
                  <img className={styles.ddImg} src={DeathsDoor}  onMouseEnter={() => {setInterestHovered(4); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
                </div>
              </div>
            </div>
            <div className={styles.twoContainer}>
              <img className={styles.jojiImg} src={Joji}  onMouseEnter={() => {setInterestHovered(5); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
              <img className={styles.hisaishiImg} src={Hisaishi}  onMouseEnter={() => {setInterestHovered(6); setHoveringInterest(true); setNumHovers(numHovers+1)}} onMouseLeave={() => {setHoveringInterest(false);}}/>
            </div>
          </div>
        </div>
        <div className={styles.aboutTextContainer}>
          <h2 className={styles.helloText}>
                Get in touch, <a className={styles.nameDiv}href="mailto:bencdimarco@gmail.com" style={{textDecoration: 'none', cursor: 'pointer', color: '#fff'}}>bencdimarco[at]gmail.com</a>
          </h2>
          <h2 className={styles.aboutText}>
            (Available for work)
          </h2>
        </div>
        {/* <Switch>
          <Route path="/memento" component={MementoCS} />
          <Route path="/neverdmca" component={NDMCA} />
          <Route path="/bps" component={BPS} />
        </Switch> */}
      </div>
      <div className={styles.footerText}>
                <div className={styles.footerC}>© {new Date().getFullYear()} Ben DiMarco</div>
                <a style={{textDecoration: 'none'}} className={styles.footerL}>Resume </a>
                <a href="mailto:bencdimarco@gmail.com" target="_blank" style={{textDecoration: 'none'}}  className={styles.footerL}>Email</a>
                <a href="https://twitter.com/bencdimarco" target="_blank" style={{textDecoration: 'none'}} className={styles.footerL}>Twitter</a>
            </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
