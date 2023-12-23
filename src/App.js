import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import BPS from './components/CaseStudies/BPS/BPS';
import Home from './components/Home/Home.js';
import NDMCA from './components/CaseStudies/NeverDMCA/NeverDMCA';
import Memento from './components/CaseStudies/Memento/Memento';

// const Home = React.lazy(() => import("./components/Home/Home.js"));
// const NDMCA = React.lazy(() => import("./components/CaseStudies/NeverDMCA/NeverDMCA"));
// const Memento = React.lazy(() => import("./components/CaseStudies/Memento/Memento"));
// const BPS = React.lazy(() => import("./components/CaseStudies/BPS/BPS"));

function App() {

  return (
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
        <Switch>

          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Route exact path="/" component={withRouter(Home)} />
          {/* </Suspense> */}

          {/* <Suspense fallback={<div style={{background: "red"}}>Loading...</div>}> */}
            <Route exact path="/memento" component={withRouter(Memento)} />
          {/* </Suspense> */}
          
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Route exact path="/neverdmca" component={withRouter(NDMCA)} />
          {/* </Suspense> */}

          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Route exact path="/bps" component={withRouter(BPS)} />
          {/* </Suspense> */}
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
