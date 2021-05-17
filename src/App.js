import React from 'react';
import logo from './assets/Logo.png'
import './styles.css';
import Filter from "./components/Filter/Filter";
import Tickets from "./components/Tickets/Tickets";

const App = () => (
  <div className="app">
    <div className="logo">
        <img src={logo} alt=""/>
    </div>
      <div className="container gridApp">
          <Filter />
          <Tickets/>
      </div>
  </div>
);

export default App;
