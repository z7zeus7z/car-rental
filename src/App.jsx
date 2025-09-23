import { useState } from "react"
import {Routes ,Route} from 'react-router-dom'
import Nav from "./Components/Nav/Nav"
import Hero from "./Components/Hero/Hero"
import Cars from "./Components/Cars/Cars"
import Booking from './Components/Bookings/Booking'
import Signin from './Components/SignIn/Signin'
import car from './assets/car.jpg'
import CarListing from "./Components/CarListing/CarListing"
function App() {
  /*-----CARSDUMMY---- */
  const cars = [
    {id : 1 ,
      brand:'Toyota',
      year: 2020,
      type:'SUV',
      location:'Amman',
      discription:'lorem  sadsad awdasd afa asfsknjin asndasijfnai aijnijfnijsan iasnfijasnfijasn',
      img:car
    },
     {id : 2,
      brand:'Honda',
      year: 2024,
      type:'Sedan',
      location:'Zarqa',
      discription:'lorem  sadsad awdasd afa asfsknjin asndasijfnai aijnijfnijsan iasnfijasnfijasn',
      img:car

    },
     {id : 3 ,
      brand:'Honda',
      year: 2019,
      type:'SUV',
      location:'Amman',
      discription:'lorem  sadsad awdasd afa asfsknjin asndasijfnai aijnijfnijsan iasnfijasnfijasn',
      img:car
    },
     {id : 4 ,
      brand:'Suzoki',
      year: 2020,
      type:'motorcycle',
      location:'Amman',
      discription:'lorem  sadsad awdasd afa asfsknjin asndasijfnai aijnijfnijsan iasnfijasnfijasn',
      img:car
    },
     {id : 5 ,
      brand:'Toyota',
      year: 2023,
      type:'SUV',
      location:'Amman',
      discription:'lorem  sadsad awdasd afa asfsknjin asndasijfnai aijnijfnijsan iasnfijasnfijasn',
      img:car
    },
     {id : 6 ,
      brand:'Toyota',
      year: 2025,
      type:'SUV',
      location:'Amman',
      discription:'lorem  sadsad awdasd afa asfsknjin asndasijfnai aijnijfnijsan iasnfijasnfijasn',
      img:car
    }
  ]
  /*---THEME---*/
  const [theme,setTheme] = useState('lightPrimary')
  const toggleTheme = () =>{
    setTheme(prev => prev==='lightPrimary'?'darkPrimary':'lightPrimary')
    
  }

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Hero cars={cars} theme={theme}/>}/>
        <Route path="/Cars" element={<Cars cars={cars} theme={theme}/>}/>
        <Route path="/Bookings" element={<Booking theme={theme}/>}/>
        <Route path="/CarListing" element={<CarListing theme={theme}/>}/>
        <Route path="/SignIn" element={<Signin theme={theme}/>} />
      </Routes>
    </>
  )
}

export default App
