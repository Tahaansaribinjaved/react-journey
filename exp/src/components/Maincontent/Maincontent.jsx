import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Maincotent.css'
import Main from '../Main/Main'

const Maincontent = () => {
  return (
    <div className='main-content'>
      <Sidebar />
      <Main/>
    </div>
  )
}

export default Maincontent
