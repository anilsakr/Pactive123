import React from 'react';
import './Thankyou.css';
import { Link } from "react-router-dom";

import Logo from '../../Assests/Logo.png';
import ctower from '../../Assests/control-tower.png';
import Dashboard from '../../Assests/Dashboard.png';
import Siren from '../../Assests/Siren.png';
import notifybell from '../../Assests/notify-bell.png';
import growthgraph from '../../Assests/growth-graph.png';
import notepad from '../../Assests/note-pad.png';
import User from '../../Assests/User.png';
import logout from '../../Assests/log-out.png';

export default function Thankyou() {
  return (
    <div className='mains'>
    <div className='sb'>
    <div className='wrapper'>
    <div>
    <img className='sidebar_icons' src={Logo} alt='clickable'></img>
    </div>
    <div className='styles'>

    </div>
    <div>
    <Link to="/Home"><img className='logos' src={ctower} alt='clickable'></img></Link>
    </div>
    <div>
      <img className='logos' src={Dashboard} alt='clickable'></img>
    </div>
    <div className='styles'>
      
    </div>
    <div>
      <img className='logos' src={Siren} alt='clickable'></img>
    </div>
    <div>
      <img className='logos' src={notifybell} alt='clickable'></img>
    </div>
    <div>
      <img className='logos' src={growthgraph} alt='clickable'></img>
    </div>
    <div>
      <img className='logos' src={notepad} alt='clickable'></img>
    </div>
    <div>
      <img className='logos' src={User} alt='clickable'></img>
    </div>
    <div>
      <Link to="/Thankyou"><img className='logos' src={logout} alt='clickable'></img></Link>
    </div>
  </div>
    </div>
    <div className='mb'>
        <h1>Thank you</h1>
    </div>
</div>
  )
}
