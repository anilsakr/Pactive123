// import Sidebar from './Sidebar';
import './App.css';
// import Topbar from './Components/Topbar';
import Home from './Components/home/Home.js';
// import ActivityInsights from './Components/activityInsights/ActivityInsights.js';
// import ActivityList from './Components/activityList/ActivityList';
// import AllInsights from './Components/allInsights/AllInsights';

// import axios from 'axios';

// import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';
import Thankyou from './Components/home/Thankyou';
import Welcome from './Components/home/Welcome';


function App() {
  
return (
  <>
     
    <Router>
        <Routes>
          {/* <Switch> */}
          <Route path="/" element={<Welcome/>} />
          <Route path="/Thankyou" element={<Thankyou/>} />
          <Route path="/Home" element={<Home/>} />
          
          {/* <Route path="/About" element={<About/>} />
          <Route path="/ControlTower" element={<ControlTower/>} /> */}
          {/* </Switch> */}
        </Routes>
    </Router>

  </>


);
}

export default App;