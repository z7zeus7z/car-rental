import style from '../../Styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Ham = (props) => {
    const{theme} = props
    const [isOpen,setIsOpen]=useState(false)
    const toggleMenu = ()=>{
        setIsOpen(prev =>!prev)
    }
    const icon = isOpen===false?faBars:faXmark
    const Menu = isOpen ===false?style.hide:'';
  return (
    <>
        <FontAwesomeIcon onClick={toggleMenu} className={style.icon}  icon={icon}/>
        <div className={`${style.hamLinks} ${Menu} ${theme} `}>
            <ul>
                <Link className={style.link} onClick={toggleMenu} to={'/'}><li>Home</li></Link>
                <Link onClick={toggleMenu} to={'/Cars'}><li>Cars</li></Link>
                <Link onClick={toggleMenu} to={'/Bookings'}><li>Bookings</li></Link>
                <Link onClick={toggleMenu} to={'/CarListing'}><li>List Your Car</li></Link>
                <Link onClick={toggleMenu} to={'/SignIn'}><li>Sign in</li></Link>
            </ul>
        </div>
    </>
)
}

export default Ham