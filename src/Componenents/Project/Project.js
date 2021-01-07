import React from 'react'
import { App } from "../../base"

const db = App.firestore()

function Event() {
  // const [fileUrl, setFileUrl] = React.useState(null);
  // const [body, setbody] = React.useState("");
  // const [title, settitle] = React.useState("");
  const [data, setData] = React.useState([]);



  // const imageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const storeRef = app.storage().ref();
  //   const fileRef = storeRef.child(file.name);
  //   await fileRef.put(file);
  //   setFileUrl(await fileRef.getDownloadURL());
  // };

  const getData = async () => {
    await db.collection("Thrives")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setData(items);
      });
  };
  console.log(data);
  React.useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <center>
        <h1>Projects</h1>
      </center>

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
        flexWrap: "wrap",

      }} >

        {data.map(({ avatar, title, body }) => (
          <div style={{
            display: "flex",
            flexDirection: "column",

          }}>
            <div >
              <img src={avatar} alt={title}
                style={{
                  height: "300px",
                  width: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",

                }}
              />
            </div>
            <div style={{
              height: "150px",
              width: "400px",
              fontFamily: "poppins"
            }}>
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "25px",
                  fontWeight: "bold"

                }}> {title}</p>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Event
