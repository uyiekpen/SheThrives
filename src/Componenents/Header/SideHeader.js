import React from 'react'
import { Link } from 'react-router-dom'
import "../../Componenents/Header/Header.css"
// import CloseIcon from '@material-ui/icons/Close';



function SideHeader({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen ? <div className="SideHeader">
        {/* <CloseIcon /> */}
        <div className="sideContent">
          <div className="sideText">
            <h3>Home</h3>
            <h3>About us</h3>
            <Link to="/Event" className="link">  <h3>Project</h3></Link>
            <h3>Contact</h3>
          </div>
        </div>
      </div> : null}
    </>
  )
}

export default SideHeader
