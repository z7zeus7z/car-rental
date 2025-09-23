import style from '../../Styles/Nav.module.css' 
import Ham from './Ham'
import Switch from './Switch'
import { Link } from 'react-router-dom'
const Nav = (props) => {
    const {theme,toggleTheme} = props
    
  return (
    <>
    <div className={`${style.navContainer} ${theme}  `}>
        <div className={style.logo}><h3>DriveSpot</h3></div>
        <div className={style.navBtns}>
          <div className={style.navlinks}>
              <ul>
                 <Link to={'/'}><li>Home</li></Link>
                <Link to={'/Cars'}><li>Cars</li></Link>
                <Link to={'/Bookings'}><li>Bookings</li></Link>
                <Link to={'/CarListing'}><li>List Your Car</li></Link>
                <Link to={'/SignIn'}><li>Sign in</li></Link>
              </ul>
            </div>
            <Switch theme={theme} toggleTheme={toggleTheme}/>
            <Ham theme={theme}/>
            
        </div>
    </div>
    </>
  )
}

export default Nav