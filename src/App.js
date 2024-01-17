import React, { lazy, Suspense, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav';
import Footer from './components/Nav/Footer';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import BPS from './components/CaseStudies/BPS/BPS';
import Home from './components/Home/Home.js';
import NDMCA from './components/CaseStudies/NeverDMCA/NeverDMCA';
import Memento from './components/CaseStudies/Memento/Memento';
import WebPoint from "./components/CaseStudies/WebPoint/Webpoint"
import LearnPrompting from './components/CaseStudies/LearnPrompting/LearnPrompting.js';
import Blender from './components/CaseStudies/Blender/Blender.js';

import ScrollToTop from './ScrollToTop.js';

// const Home = React.lazy(() => import("./components/Home/Home.js"));
// const NDMCA = React.lazy(() => import("./components/CaseStudies/NeverDMCA/NeverDMCA"));
// const Memento = React.lazy(() => import("./components/CaseStudies/Memento/Memento"));
// const BPS = React.lazy(() => import("./components/CaseStudies/BPS/BPS"));

function App() {

  return (
    <Suspense fallback={<h1>Still Loading…</h1>}>
    <Router>
      <div>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
            margin-top: -50px;
            overflow-x: hidden;
          }
        `}</style>
        <Nav />
        <ScrollToTop>
          <Switch>

            {/* <Suspense fallback={<div>Loading...</div>}> */}
              <Route exact path="/" component={withRouter(Home)} />
            {/* </Suspense> */}

             {/* <Suspense fallback={<div>Loading...</div>}> */}
             <Route exact path="/learnprompting" component={withRouter(LearnPrompting)} />
            {/* </Suspense> */}
            
            {/* <Suspense fallback={<div>Loading...</div>}> */}
              <Route exact path="/neverdmca" component={withRouter(NDMCA)} />
            {/* </Suspense> */}

            {/* <Suspense fallback={<div>Loading...</div>}> */}
              <Route exact path="/bps" component={withRouter(BPS)} />
            {/* </Suspense> */}

              {/* <Suspense fallback={<div style={{background: "red"}}>Loading...</div>}> */}
              <Route exact path="/memento" component={withRouter(Memento)} />
            {/* </Suspense> */}

            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Route exact path="/webpoint" component={withRouter(WebPoint)} />
            {/* </Suspense> */}

            <Route exact path="/3d" component={withRouter(Blender)} />
            {/* </Suspense> */}
            
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
    </Suspense>
  );
}

export default App;
