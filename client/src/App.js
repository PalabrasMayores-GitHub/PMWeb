import React, {useState, useEffect} from 'react';

import Videoplayer from './Components/VideoPlayer/videoplayer';
import Logo from './Components/Logo/Logo';
import { Waves } from './Components/Waves/Waves';
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
    if(params == undefined) return;
    fetch(`/story/${params.storyID}`)
    .then((response) => {
      if(response.status === 400){
        throw new Error();
      }
      return response.json();
    })
    .then(videoData => {
      if(videoData.storyID !== undefined){
        setUrl(`https://www.youtube.com/embed/${videoData.videoID}`);
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
      <Bibliography name={personInfo.PersonName} text={personInfo.Bibliography}/>
    </div>
    :
    <div>
      <Logo></Logo>
      <Waves></Waves>
    </div>
  );
}

export default App;
