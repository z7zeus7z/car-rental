import style from '../../Styles/Hero.module.css'
import CTA from '../CTA'
const SearchFilter = () => {
  return (
    <>
        <div className={style.filterCard}>
            <form className={style.form} action="">
                <div className={style.option}>
                <select name="Year" id="">
                    <option value="">All Years</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
                <select name='type' id="">
                  <option value="">All Types</option>  
                  <option value="">Sedan</option>  
                  <option value="">SUV</option>  
                  <option value="">Truck</option>  
                  <option value="">Hatchbag</option>  
                  <option value="">Motorcycle</option>  
                </select>
                <select name="location" id="">
                  <option value="">All Locations</option>
                  <option value="Amman">Amman</option>
                  <option value="Zarqa">Zarqa</option>
                  <option value="Irbid">Irbid</option>
                  <option value="Aqaba">Aqaba</option>
                </select>
                </div>
                <CTA text={'Search'}/>
            </form>
        </div>
    </>
  )
}

export default SearchFilter