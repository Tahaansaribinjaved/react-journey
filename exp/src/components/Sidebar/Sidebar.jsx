import React from 'react'
import './Sidebar.css'
import { FaChartLine, FaChartPie, FaHome, FaUserCircle } from 'react-icons/fa'
import { IoMdHome } from "react-icons/io";
import {BiTransfer} from 'react-icons/bi';
import {GoGoal} from 'react-icons/go';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="user-profile">
        <FaUserCircle />
        <h3>Wellcome !</h3>
      </div>
      {/* <hr /> */}
      <nav className="main-nav">
        <ul>
          <li className='active'> <IoMdHome />Dashboard</li>
          <li> <BiTransfer /> Transactions</li>
          <li> <FaChartPie /> Budgets </li>
          <li> <FaChartLine /> Reports</li>
          <li> <GoGoal /> Saving Goals</li>
          {/* <li> <BiSettings /> Settings</li> */}
        </ul>
      </nav>
      
    </div>
  )
}

export default Sidebar
