import style from '../../Styles/Booking.module.css'
const BookingInfo = (props) => {
  const {theme}= props
    const sCtheme = theme==='lightPrimary'?"lightSecondary":"darkSecondary"
  return (
    <>
     <div className={`${style.bookingInfo} ${sCtheme}`}>
                    <div className={style.title}><h4>My Bookings</h4></div>
                    <div className={style.yourBookings}>
                        <div className={style.carName}><p>Tesla x4</p></div>
                        <div className={style.bookDate}><p>2020.12.10</p></div>
                    </div>
                </div>
    </>
)
}

export default BookingInfo