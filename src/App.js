import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import dotenv from  'dotenv'

function App() {
  const [image, setImage] = useState()

  const handleChange = () => {
    axios.get(`https://api.generated.photos/api/v1/faces?api_key=${process.env.REACT_APP_PHOTO_API_KEY}&order_by=random`).then(res => {
      const uri = res.data.faces[0].urls[4][512];
      uri && setImage(uri);
    }).catch(err => {
      console.log(err.message);
    });
  };

  return (
    <div className="App">
      <h1>This person does not exist</h1>
      {image && <img src={image} alt='AI Face' />}
      <button type='button' onClick={handleChange}>
      New face
      </button>
    </div>
  );
}

export default App;
