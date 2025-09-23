import style from '../../Styles/Booking.module.css'
import CTA from '../CTA'
const PersonalInfo = (props) => {
  const {theme} = props
  const sCtheme = theme==='lightPrimary'?"lightSecondary":"darkSecondary"
  return (
    <>
        <div className={`${style.personalInfoContainer} ${sCtheme}`}>
            <div className={style.title}><h4>Personal Info</h4></div>
            <form action="">
                <label htmlFor="">FullName :</label>
                <input type="text" />
                <label htmlFor="">Email :</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Phone :</label>
                <input type="number" />
                <CTA text={'Save Change'}/>
            </form>
        </div>
    </>
  )
}

export default PersonalInfo