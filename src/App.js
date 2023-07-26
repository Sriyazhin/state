import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Twelve from './assets/images/twelve.gif';
import Three from './assets/images/three.gif';
import Nine from './assets/images/nine.gif';
import Six from './assets/images/six.gif';

function App() {
  const [imageSrc, setImageSrc] = useState(Twelve);

  const timeThree = () => setImageSrc(Three);
  const timeNine = () => setImageSrc(Nine);
  const timeSix = () => setImageSrc(Six);
  const timeTwelve = () => setImageSrc(Twelve);

   return (
  
<div>
 
  
  <Button variant='contained' sx={{margin:2}} onClick={timeThree} > Three o clock
  </Button>
  <Button variant='contained'  onClick={timeTwelve} > Twelve o clock
  </Button>
  <img src={imageSrc} id='time' style={{width:200}} />
  <Button variant='contained' sx={{margin:2}} onClick={timeNine}> Nine o clock
  </Button>
  <Button variant='contained' onClick={timeSix}>Six o clock
  </Button>
  
  
  </div>
     
  );
}

export default App;