import React from 'react'
import '../Styles/ParkingSpace.css';
const ParkingSpace = () => {
  return (
    <div className='mainContainerparkingspace'>
        <div> 
            <h1>Parking Management</h1>
        </div>
    <div className='ParkingSpaceContainer'>
      <div className='twowheeler'>
        <h2>Two Wheeler</h2>
        <div>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>

        </div>
      </div>

      <div className='threewheeler'>
        <h2>Three Wheeler</h2>
        <div>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>

        </div>
      </div>

      <div className='fourwheeler'>
        <h2>Four Wheeler</h2>
        <div>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>

        </div>
      </div>

    </div>
    </div>
  )
}

export default ParkingSpace