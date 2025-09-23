import style from '../../Styles/Hero.module.css'
import SearchFilter from './SearchFilter'
import FeturedCars from './Feturedcars/FeturedCars'
import Footer from '../Footer/Footer'
const Hero = (props) => {
    const {cars,theme} = props
  return (
    <>
        <div className={`${style.heroContainer}`}>
              <div className='wrapper'>
                <div className={style.contentContainer}>
                  <div className={style.title}>
                <h2>Find the best ride for you</h2>
                <h5>Easy Ride , closest to you, for the best price</h5>
              </div>
              <SearchFilter/>
                </div>
              </div>
        </div>
        <FeturedCars cars={cars} theme={theme} />
        <Footer theme={theme}/>
    </>
)
}

export default Hero