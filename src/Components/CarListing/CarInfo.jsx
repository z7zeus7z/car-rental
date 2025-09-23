import { useState } from 'react'
import style from '../../Styles/CarListing.module.css'
import CTA from '../CTA';

export const CarInfo = () => {
    const [carModel,setCarModel] =useState('');
    const [year,setYear] =useState('');
    const [type,setType] =useState('');
    const [transmition,setTransmition] =useState('');
    const [fuelType,setFuelType] =useState('');

  return (
    <>
    <div className={style.carInfoContainer}>
        <div className={style.formTitle}>Car Info</div>
        <form action="">
            <label htmlFor="carModel">Car model:</label>
            <input type="text" id='carModel' value={carModel} onChange={(e) => setCarModel(e.target.value)} />
            <label htmlFor="year">Year:</label>
            <input type="number" id='year' value={year} onChange={(e) => setYear(e.target.value)} />
            <label htmlFor="type">Type:</label>
            <select id="type" value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="HatchBack">HatchBack</option>
                <option value="MotorCycle">MotorCycle</option>
            </select>
            <label htmlFor="transmition">Transmition</label>
            <select id="transmition" value={transmition} onChange={(e)=>setTransmition(e.target.value)}>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
            </select>
            <label htmlFor="fuelType">Fuel type</label>
            <select id="fuelType" value={fuelType} onChange={(e)=>setFuelType(e.target.value)}>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <CTA type={'submit'} text={'Submit'}/>
        </form>
    </div>
    </>
)
}
