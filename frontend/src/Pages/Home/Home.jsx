import React, { useEffect, useState } from 'react';
import './Home.css';
import Carousel from '../../components/Carousel/carousel';
import Categories from '../../components/Categories/Categories';
import Productcard from '../../components/Productcard/Productcard';
import Morecard from '../../components/Morecard/Morecard';
import Header from '../../components/Header/Header';
import Data from '../../Data/Products.json';

function Home() {

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(()=>{
        setFetchedData(Data.mainProducts);
    },[])

    return (
        <div className='containerr'>
            <Header back='none' headTxt1='Renting' headTxt2='GO'/>
            <div className="container mt-5 pt-4">
                <Carousel carouselid='homeCar' img1='./images/Monsoon-offer-banner-HP.jpg' img2='./images/Paytm-Payments-Bank-web-.jpg' img3='./images/Referral banner Web.jpg'/>
                <div className="categoryWrap d-flex flex-wrap mt-4">
                    <Categories index='1' img='./images/mistfanIcon.png' txt='Mist Fan' />
                    <Categories index='2' img='./images/aircooler.png' txt='Air cooler' />
                    <Categories index='3' img='./images/portableac.png' txt='Portable AC' />
                    <Categories index='5' img='./images/pedestrialfan.png' txt='Pedestal Fan' />
                    <Categories index='6' img='./images/electricheater.png' txt='Heater' />
                    <Categories index='7' img='./images/portablewash.png' txt='Washroom' />
                    <Categories index='8' img='./images/towerAc2-removebg-preview.png' txt='Tower AC' />
                </div>
                <div className="yourLoveWrap my-5">
                    <p className='fw-bold fs-3 mb-0 yourP'>You'll love <br /> <span className='text-muted fw-normal border-bottom border-danger fs-5'> to take these home.</span></p>
                    <div className="yourLove d-flex justify-content-start py-4 px-3">
                        {
                            fetchedData.map((item)=>(
                                <Productcard key={item.id} price={item.subProducts[0].price} name={item.subProducts[0].subProName} img={item.subProducts[0].img}/>
                            ))
                        }
                    </div>
                </div>
                <div className="more mb-5">
                    <p className='fw-bold fs-3 mb-0 yourP'>there's more<br /> <span className='text-muted fw-normal border-bottom border-danger fs-5'> to renting.</span></p>
                    <div className="moreCardWrap mt-4 d-flex flex-wrap">
                        <Morecard icon='./images/qualityIcon.png' head='Finest Quality Products' para="Quality matters to you, and us! That's why we do a strict quality-check for every product."/>
                        <Morecard icon='./images/maintainIcon.png' head='Free maintenance' para="Keeping your rented products in a spick and span condition is on us, so you can sit back and relax."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;