import React from 'react'
import team from "../../Componenents/Team/Image/team 1.jpg"
import grace from "../../Componenents/Team/Image/team 2.jpg"
import osa from "../../Componenents/Team/Image/osa.jpg"


function Team() {
  return (
    <div>
      <center>
        <h1>Meet the team</h1>
      </center>
      <div style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-around",
        flexWrap: "wrap"
      }}>
        <div>
          <img src={team} alt="bukky.jpg"
            style={{
              height: "250px",
              width: "270px",
              boxShadow: "0 4px 8px 0",
              objectFit: "cover",
              marginLeft: "20px",
              borderRadius: "270px",



            }}
          />
          <center style={{
            marginBottom: "50px"

          }} >
            Bukola Gbemi<br />
            Co-Founder SheThrives
          </center>
        </div>
        <div>
          <img src={grace} alt="bukky.jpg"
            style={{
              height: "250px",
              width: "270px",
              boxShadow: "0 4px 8px 0",
              objectFit: "cover",
              marginLeft: "20px",
              borderRadius: "300px",
              textTransform: "capitalize",
              fontFamily: "poppins"



            }}
          />
          <center style={{
            marginBottom: "50px"

          }}>
            Oma Alele Grace<br />
            Co-Founder SheThrives
          </center>
        </div>
        <div>
          <img src={osa} alt="bukky.jpg"
            style={{
              height: "250px",
              width: "270px",
              boxShadow: "0 4px 8px 0",
              objectFit: "cover",
              marginLeft: "20px",
              borderRadius: "270px"



            }}
          />
          <center style={{
            marginBottom: "50px"

          }}>
            Uyiekpen Osazie Elizabeth<br />
            Co-Founder SheThrives
          </center>
        </div>
      </div>
    </div>
  )
}

export default Team
