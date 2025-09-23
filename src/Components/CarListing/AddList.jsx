import style from '../../Styles/CarListing.module.css'
import { CarInfo } from './carInfo'
const AddList = () => {
  return (
   <>
   <div className={style.listCarContainer}>
    <div className={style.title}>List Your Car</div>
    <CarInfo/>
   </div>
   </>
  )
}

export default AddList