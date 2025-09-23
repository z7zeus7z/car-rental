import style from '../../Styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faSun } from "@fortawesome/free-solid-svg-icons";

const Switch = (props) => {
    const {toggleTheme,theme}=props
    const icon = theme==='lightPrimary'? faMoon :faSun
  return (
    <>
        <div onClick={toggleTheme} className={style.switch}>
            <FontAwesomeIcon size='lg' icon={icon} />
        </div>
    </>
  )
}

export default Switch