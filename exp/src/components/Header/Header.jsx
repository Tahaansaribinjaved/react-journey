import React from 'react'
import './Header.css'
import { FaWallet } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
const Header = () => {
  return (
    <div>
        <header className='header'>
            <nav className='nav-container'>
                <div className='nav-item nav-items-1'>
                    <h1> <FaWallet /> Income and Expense Tracker</h1>
                    <p>Track your income and expenses with ease</p>
                </div>
                <div className='nav-item nav-items-2'>
                    <FaMoon />
                </div>
            </nav>
        </header>
      
    </div>
  )
}

export default Header
