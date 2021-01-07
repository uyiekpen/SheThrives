import React from 'react'
import "../../Componenents/Header/Header.css"
import pix from "../../Componenents/Header/Image/logo1.jpg"
import ListIcon from '@material-ui/icons/List';
import SideHeader from './SideHeader';
import { Link } from 'react-router-dom';



function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const clickEffect = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="HeaderDiv">
        <div className="ImageDiv">
          <img src={pix} alt="girl.jpg" />
        </div>
        <div className="NavDiv">
          <h3>Home</h3>
          <h3>About us</h3>
          <Link to="/Event" className="link">  <h3>Project</h3></Link>
          <h3>Contact</h3>
        </div>
        <div className="Menu">
          <ListIcon onClick={clickEffect} />
        </div>
        <SideHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}

export default Header
