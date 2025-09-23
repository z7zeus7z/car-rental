import style from '../Styles/CarCard.module.css'
const CarCard = (props) => {
    const {car,theme} = props
    const sCtheme = theme==='lightPrimary'?"lightSecondary":"darkSecondary"
  return (
    <>
    <div className={`${style.carCard} ${sCtheme}`}>
        <div className={style.carImgs}>
            <img src={car.img} alt="" />
        </div>
        <div className={style.carInfo}>
            <div className={style.carDescription}>
                <p>{car.discription}</p>
                <hr />
                <a href="">View Details</a>
            </div>
            <div className={style.carLinks}>
                <div className={style.info}><p>{car.brand}</p></div>
                <div className={style.info}><p>{car.year}</p></div>
                <div className={style.info}><p>{car.type}</p></div>
                <div className={style.info}><p>{car.location}</p></div>
            </div>
        </div>
    </div>
    </>
)
}

export default CarCard