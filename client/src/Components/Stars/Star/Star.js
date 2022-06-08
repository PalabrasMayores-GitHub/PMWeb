import StarImageLite from '../../../Images/StarLite.png';
import StarImageDark from '../../../Images/StarDark.png';
import StarImageFull from '../../../Images/StarFull.png';

import './Star.css';
import {useState} from 'react';

let imageUrl = StarImageLite;

//Hover
const StarHover = (num, setLastHover) => {
    setLastHover(num);
}

const EndHover = (setLastHover) => {
    setLastHover(0);
    console.log('a')
}

//Click
const Click = (num, setLastActive) => {
    setLastActive(num);
    console.log(num)
}


const Star = (props) => {
    const [state, setstate] = useState(0);
    const {num, lastActive, lastHover, setLastActive, setLastHover} = props;

    if(lastActive >= num && state === 0){
        setstate(1);
    }
    else if (lastActive < num && state === 1){
        setstate(0);
    }

    if(state === 1 && imageUrl !== StarImageFull ){
        imageUrl = StarImageFull;
    }
    else if(lastHover >= num && imageUrl !== StarImageDark && state === 0){
        imageUrl = StarImageDark;
    }
    else if(lastHover < num && imageUrl !== StarImageLite && state === 0){
        imageUrl = StarImageLite;
    }

    return(
        <div className='star'
            onMouseEnter={() => StarHover(num, setLastHover)} 
            onMouseLeave={() => EndHover(setLastHover)}
            onClick={() => Click(num, setLastActive)}
        >
            <img className='starImage' src={imageUrl} alt='Star'/>
        </div>
    );
}

export default Star;