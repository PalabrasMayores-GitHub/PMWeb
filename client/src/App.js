import React, {useState, useEffect} from 'react';

import Videoplayer from './Components/VideoPlayer/videoplayer';
import Logo from './Components/Logo/Logo';
import { Waves } from './Components/Waves/Waves';
import Stars from './Components/Stars/Stars';
import Bibliography from './Components/Bibliografy/Bibliografy';

const calculatePageParams = () => {
  let parmaString = document.URL.split('?')[1];
  if(parmaString === undefined) return;
  parmaString = parmaString.split('#')[0].split('&');

  return Object.fromEntries(
    parmaString.map(pair => 
      pair.split('='))
  );
}

let params;

const App = () => {

  const [url, setUrl] = useState('');
  const [personInfo, setPersonInfo] = useState('');
  
  useEffect(() => {
    params = calculatePageParams();
    fetch('http://localhost:3001/getstory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params)
    })
    .then((response) => {
      if(response.status === 400){
        throw new Error();
      }
      return response.json();
    })
    .then(videoData => {
      if(videoData.id !== undefined){
        setUrl(`https://www.youtube.com/embed/${videoData.video_id}`);
        setPersonInfo(videoData)
      }
    })
    .catch(err => {console.log('error al encontrar historia')})
  }, [])

  return (
    url !== '' ?
    <div className="App">
      <Logo/>
      <Videoplayer url={url}/>
      <Waves/>
      <Bibliography name={personInfo.nombre} text={personInfo.text}/>
      <Stars></Stars>
    </div>
    :
    <div>
      <Logo></Logo>
      <Waves></Waves>
    </div>
  );
}

export default App;
