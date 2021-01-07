import React from 'react'


const Data = [
  {
    Image: "/Image/12.jpg"
  },
  {
    Image: "/Image/team 1.jpg"
  },
  {
    Image: "/Image/b81.jpg"
  },
  {
    Image: "/Image/team 2.jpg"
  },
]

function Picture() {
  const [counter, setcounter] = React.useState(1)
  return (
    <div>
      <div onClick={() => {
        setcounter(counter + 1)
        console.log("click")
        console.log(counter)
      }}

      >


        {
          <img
            src={Data[counter % Data.length].Image}
            style={{
              height: "400px",
              width: "100vw",
              ObjectFit: "cover",
              marginTop: "20px",
              transition: " 1s ease-in-out"



            }}
          />
        }
      </div>


    </div>
  )
}

export default Picture
