import style from '../../../Styles/Hero.module.css'
import CarCard from '../../CarCard'
const FeturedCars = (props) => {
    const {cars,theme} = props
  return (
    <>
     <div className={`${style.feturedCarsContainer} ${theme}`}>
          <div className='wrapper'>
            <div className={style.mainContainer}>
                <div className={style.title}><h5>Fetured Cars</h5></div>
                <div className={style.carCards}>
                  {cars.map(car =>(
                    <CarCard key={car.id} car={car} theme={theme}/>
                  ))}
                </div>
               
                
            </div>
          </div>
        </div>
    </>
  )
}

export default FeturedCars