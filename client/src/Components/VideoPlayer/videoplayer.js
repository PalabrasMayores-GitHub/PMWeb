import './videoplayer.css';

import React from "react";

const Videoplayer = (props) => {
    const {url} = props;
    return(
        <div className='videoPlayer'>
            <iframe className='video-iframe shadow-1'
                width="560" height="315" 
                src={url} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default Videoplayer;