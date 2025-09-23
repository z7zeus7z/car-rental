import style from '../../Styles/Cars.module.css'
import SearchFilter from '../Hero/SearchFilter'
import CarCard from '../CarCard'
import Footer from '../Footer/Footer'
const Cars = (props) => {
  const {cars,theme} = props
  return (
    <>
      <div className={`${style.carsPageContainer} ${theme}`}>
        <div className='wrapper'>
          <div className={style.contentContainer}>
              <div className={style.filter}><SearchFilter/></div>
              <div className={style.carSection}>
                {cars.map(car =>(
                  <CarCard key={car.id} car={car} theme={theme}/>
                ))}
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
)
}

export default Cars