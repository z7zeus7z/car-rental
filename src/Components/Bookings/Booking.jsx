import style from '../../Styles/Booking.module.css'
import PersonalInfo from './PersonalInfo'
import BookingInfo from './BookingInfo'
import Footer from '../Footer/Footer'
import { useState } from 'react'
const Booking = (props) => {
    const {theme} = props
    const [activeTab,setActiveTab] = useState('Bookings')
    
  return (
    <>
    <div className={`${style.bookingContainer} ${theme}`}>
        <div className='wrapper'>
            <div className={style.contentContaier}>
                <div className={style.pageTitle}><h2>DashBoard</h2></div>
                <div className={style.tabs}>
                    <div onClick={()=>setActiveTab('Bookings')} className={`${style.bookings} ${activeTab === 'Bookings' ? style.activeTab : ''}`}>Bookings</div>
                    <div onClick={()=>setActiveTab('Personal')} className={`${style.personal} ${activeTab === 'Personal' ? style.activeTab : ''}`}>Personal</div>
                </div>
                {activeTab === 'Bookings'&&(<BookingInfo theme={theme}/>)}
                {activeTab === 'Personal'&&(<PersonalInfo theme={theme}/>)}
            </div>
            
        </div>
        <Footer/>
    </div>
    </>
)
}

export default Booking