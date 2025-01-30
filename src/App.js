import React, { lazy, Suspense, useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Nav/Footer';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import BPS from './components/CaseStudies/BPS/BPS';
import Home from './components/Home/Home.js';
import NDMCA from './components/CaseStudies/NeverDMCA/NeverDMCA';
import Memento from './components/CaseStudies/Memento/Memento';
import WebPoint from "./components/CaseStudies/WebPoint/Webpoint";
import LearnPrompting from './components/CaseStudies/LearnPrompting/LearnPrompting.js';
import Blender from './components/CaseStudies/Blender/Blender.js';
import ScrollToTop from './ScrollToTop.js';

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
              <Route exact path="/" component={withRouter(Home)} />
              <Route exact path="/learnprompting" component={withRouter(LearnPrompting)} />
              <Route exact path="/neverdmca" component={withRouter(NDMCA)} />
              <Route exact path="/bps" component={withRouter(BPS)} />
              <Route exact path="/memento" component={withRouter(Memento)} />
              <Route exact path="/webpoint" component={withRouter(WebPoint)} />
              <Route exact path="/3d" component={withRouter(Blender)} />
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;