import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import './App.scss';

function App() {
  return (
    <Router>
      <>
        <Route path="/" exact component={Home}/>  
        <Route path="/portfolio" exact component={Portfolio}/>  
      </>
    </Router>
  );
}

export default App;
