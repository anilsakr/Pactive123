import '../../App.css';

import Sidebar from '../..//Sidebar';

import Topbar from '../Topbar';
import ActivityInsights from '../activityInsights/ActivityInsights.js';
import ActivityList from '../activityList/ActivityList';
import AllInsights from '../allInsights/AllInsights';
import axios from 'axios';

import React, { useState, useEffect } from 'react'; 
export default function Home() {
    const [data, setData] = useState(null);
  async function fetchData() {
  const [response1,response2] = await Promise.all([
    await axios.get('http://localhost:4200/getControlTowerSummary'),
    await axios.get('http://localhost:4200/getActivityInsights')
  ]);
  console.log(response1.data);
  setData(response1.data);
  console.log(response2.data);
  setData(response2.data);
  }
  useEffect(() => {
  fetchData();
  }, []); 
  
  return (
<div className='container'>
  <div className='sidebar'>
  <Sidebar />
  </div>
  <div className='maincontent'>
      <div className='datas'>
        <div className='r1'>
          <h2><b>Control Tower</b></h2>
        </div>
        <div className='r2'>
          <h10><b><u>Last 24 Hours</u></b></h10>
        </div>
      </div>
     
      <div className='topbar'>
          <div className='topbaricons'>
            {data ? <Topbar data={data} /> : <p>Loading...</p>}
          </div>
      </div>
      <div className='topbarcards'>
          <div className='topbarcards1'>
            {data ? <ActivityInsights data={data} /> : <p>Loading...</p>}
            </div>
            <div className='topbarcards2'>
              <ActivityList />
             
            </div>
            <div className='topbarcards3'>
              <AllInsights />
            </div>
        </div>
  </div>
</div>
  )
}
