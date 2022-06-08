import './Waves.css'
import Wave1Image from '../../Images/Wave1.png'

const Waves = () => {
    return(
        <div>
            <img className='WaveImage1' src={Wave1Image}></img>
            <img className='WaveImage2' src={Wave1Image}></img>
        </div>
    );
}


export {Waves};