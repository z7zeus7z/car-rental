import { useState } from 'react'
import style from '../../Styles/CarListing.module.css'
import AddList from './AddList'
import ManageListing from './ManageList'
import Footer from '../Footer/Footer'
const CarListing = (props) => {
    const {theme} = props
    const [activeTab,setActiveTab] = useState('listCar')
  return (
   <>
    <div className={style.carListingMainContainer}>
        <div className='wrapper'>
            <div className={style.contentContainer}>
                <div className={style.pageTitle}>List Dashbord</div>
                <div className={style.tabs}>
                    <div onClick={() => setActiveTab('listCar')} className={`${style.listcar} ${activeTab === 'listCar' ? style.activeTab : ''} `}><h5>List Your Car</h5></div>
                    <div onClick={()=> setActiveTab('manageList')} className={`${style.managecars} ${activeTab === 'manageList' ? style.activeTab : ''}`}><h5>Manage Listing</h5></div>
                </div>
                {activeTab==='listCar'&&<AddList/>}
                {activeTab==='manageList'&&<ManageListing/>}
            </div>
        </div>
    </div>
    <Footer theme={theme}/>
   </>
  )
}

export default CarListing