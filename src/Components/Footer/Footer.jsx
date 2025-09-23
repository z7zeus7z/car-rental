import style from '../../Styles/Footer.module.css'
import {Link} from 'react-router-dom'
const Footer = (props) => {
    const {theme} = props
        const sCtheme = theme==='lightPrimary'?"lightSecondary":"darkSecondary"

  return (
    <>
    <div className={`${style.footerContainer} ${sCtheme}`}>
        <div>
            <div className={style.title}>
                <h3>DriveSpot</h3>
                <p>Find Best Car For You, For The Best Price </p> 
            </div>
        </div>
        <div>
            <h5>Quick Links</h5>
            <ul>
             <Link to={'/'}><li>Home</li></Link>
             <Link to={'/Cars'}><li>Cars</li></Link>
             <Link to={'/Bookings'}><li>Bookings</li></Link>
             <Link to={'/SignIn'}><li>Sign In</li></Link>
            </ul>
        </div>
        
        
    </div>
    <hr />
    <p className={`${style.copy} ${sCtheme}`}>@copyRight ZeusDev</p>
    </>
)
}

export default Footer