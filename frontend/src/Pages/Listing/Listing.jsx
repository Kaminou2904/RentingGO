import React from 'react';
import './Listing.css';
import Listingcard from '../../components/Listingcard/Listingcard';

function Listing() {
  return (
    <div className='container'>
        <Listingcard id='car1' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg'/>
        <Listingcard id='car2' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg'/>
        <Listingcard id='car3' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg'/>
        <Listingcard id='car4' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg'/>
    </div>
  )
}

export default Listing