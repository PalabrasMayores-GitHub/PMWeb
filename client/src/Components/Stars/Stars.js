import './Stars.css'

import {useState} from 'react';

import Star from "./Star/Star"
import UploadButton from "./UploadButton/UploadButton"

const Stars = () => {
    let StarList = [];

    const [lastActive, setlastActive] = useState(0);
    const [lastHover, setlastHover] = useState(0);

    for (let i = 1; i <= 5; i++) {
        StarList.push(<Star num={i} key={i} 
            lastActive={lastActive} 
            lastHover={lastHover} 
            setlastActive={setlastActive} 
            setlastHover={setlastHover}/>)
    }

    return(
        <>
        <div className="Stars">
            {StarList}
        </div>
        <UploadButton></UploadButton>
        </>
    )
}

export default Stars;