import React from 'react'
import Header from "../../Componenents/Header/Header"
import Footer from '../Footer/Footer'
import Picture from '../PictureBody/Picture'
import Team from '../Team/Team'
import Vision from '../Vision/Vision'
import Project from "../Project/Project"

function Body() {
  return (
    <div>
      <div style={{
        height: "100vh",
        width: "100vw"

      }}>
        <Header />
        <Picture />
        <Project />
        <Vision />
        <Team />
        <Footer />
      </div>
    </div>
  )
}

export default Body
