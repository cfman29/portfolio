import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home';
import './App.scss';

const WrongPage=()=> { return (<Redirect to="/" />); }


function App() {
  return (
    <Router>
      <>
        <Route path="/" exact component={Home}/>  
        <Route path="*">
            <WrongPage />
          </Route>
      </>
    </Router>
  );
}

export default App;
