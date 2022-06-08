import './Logo.css'
import logoImage from '../../Images/logo.png'

const Logo = () => {
    console.log(logoImage)
    return(
        <div>
            <img className='logoImage' src={logoImage}/>
        </div>
    );
}

export default Logo;