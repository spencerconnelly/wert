import React, { Component } from 'react';
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MissionPage from "./components/pages/MissionPage";
import ContactPage from "./components/pages/ContactPage";
import TeamPage from "./components/pages/TeamPage";
import SponsorsPage from "./components/pages/SponsorsPage";
import {Link} from 'react-router-dom';
import MenuBar from "./components/nav/MenuBar";

const App = () => (
<div>
  <Route path="/" exact component={HomePage} />
  <Route path="/contact" exact component={ContactPage} />
  <Route path="/mission" exact component={MissionPage} />
  <Route path="/team" exact component={TeamPage} />
  <Route path="/sponsors" exact component={SponsorsPage} />
</div>);

export default App;
