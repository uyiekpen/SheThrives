import React from 'react'
import logo from "../../Componenents/Footer/Image/remove.png"
import "../../Componenents/Footer/Footer.css"
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
      <div style={{
        height: "250px",
        width: "100vw",
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "space-around",
        textTransform: "capitalize",
        fontFamily: "poppins",

      }}>
        <div className="footer1">
          <div>
            <img src={logo}

            />
          </div>
          <div >
            <p>N0 4 barr musa ahmed street,<br />off menchanic bustop,ajegunle</p>
            <p>Phone:08889000899</p>
            <p>Email:shethrives@gmail.com</p>

          </div>
        </div>

        <div className="footer2"
          style={{
            marginTop: "20px",
            borderRadius: "5px 5px"
          }}
        >
          <h3>useful links</h3>
          <p>> home</p>
          <p>> about us</p>
          <Link to="/Event" className="link"><p>> Project</p></Link>
          <p>> contact</p>
        </div>



      </div>
      <div style={{
        width: "100vw",
        height: "70px",
        backgroundColor: "#000000",
        fontFamily: "poppins",
        display: "flex",
        justifyContent: "center",

        color: "white"

      }}>
        <p>🚀SheCodes Copyright 2020
</p>      </div>
    </div>
  )
}

export default Footer
