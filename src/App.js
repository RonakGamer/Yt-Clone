import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Banner from './Banner';
import Cardbox from './Cardbox';
import Latest from './Latest';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import Trending from './trending';
import Subs from './subs';
function App() {
  return (
    <>
    <Sidebar />
    <Switch>
      <Route path = '/' exact component = {Home}/>
      <Route path = '/trending' component = {Trending}/>
      <Route path = '/subscriptions' component = {Subs}/>
      <Route component = {Error} />
    </Switch>
    </>
  );
}

export default App;
