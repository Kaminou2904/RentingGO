import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/carousel';
import Categories from '../../components/Categories/Categories';
import Productcard from '../../components/Productcard/Productcard';
import Morecard from '../../components/Morecard/Morecard';
import Header from '../../components/Header/Header';

function Home() {
    return (
        <div className='containerr'>
            <Header back='none' headTxt1='Renting' headTxt2='GO'/>
            <div className="container mt-5 pt-4">
                <Carousel carouselid='homeCar' img1='./images/Monsoon-offer-banner-HP.jpg' img2='./images/Paytm-Payments-Bank-web-.jpg' img3='./images/Referral banner Web.jpg'/>
                <div className="categoryWrap d-flex flex-wrap mt-4">
                    <Categories img='./images/mistfanIcon.png' txt='Mist Fan' />
                    <Categories img='./images/aircooler.png' txt='Air cooler' />
                    <Categories img='./images/portableac.png' txt='Portable AC' />
                    <Categories img='./images/tablefan.png' txt='Tower AC' />
                    <Categories img='./images/pedestrialfan.png' txt='Pedestal Fan' />
                    <Categories img='./images/electricheater.png' txt='Heater' />
                    <Categories img='./images/portablewash.png' txt='Washroom' />
                </div>
                <div className="yourLoveWrap my-5">
                    <p className='fw-bold fs-3 mb-0 yourP'>You'll love <br /> <span className='text-muted fw-normal border-bottom border-danger fs-5'> to take these home.</span></p>
                    <div className="yourLove d-flex justify-content-start py-4 px-3">
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <div className="btnWrap d-flex justify-content-center align-items-center">
                        <Link to='/listing' className="btn btn-outline-secondary rounded-circle">View More</Link>
                        </div>
                    </div>
                </div>
                <div className="more mb-5">
                    <p className='fw-bold fs-3 mb-0 yourP'>there's more<br /> <span className='text-muted fw-normal border-bottom border-danger fs-5'> to renting.</span></p>
                    <div className="moreCardWrap mt-4 d-flex flex-wrap">
                        <Morecard />
                        <Morecard />
                        <Morecard />
                        <Morecard />
                        <Morecard />
                        <Morecard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home