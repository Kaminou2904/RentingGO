import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
        <div className="mt-5 footerDiv bg-light container-fluid pt-5 pb-3">
            <div className="footerWrap container">
                <div className="footerInfo">
                    <div className="footerAdd d-flex align-items-center w-75">
                        <i className="fas fa-map-marker-alt fs-4 brandGoldTxt d-block rounded-circle border addLogo p-2 me-3"></i>
                        <div className="addText">
                            <p className="mb-0 fw-bold fs-5 addtxt1">The Yeti Spa</p>
                            <p className="text-muted mb-0 addtxt2">Khar, Bandra West, Mumbai, Maharashtra 400052</p>
                        </div>
                    </div>
                    <div className="addOpen mt-4 d-flex align-items-center w-75">
                        <i className="fas fa-envelope fs-4 brandGoldTxt d-block rounded-circle border addLogo p-2 me-3"></i>
                        <div className="addText">
                            <a href='mailto:rentinggo1@gmail.com' className="mb-0 fw-bold fs-5 addtxt1 nav-link">rentinggo1@gmail.com</a>
                        </div>
                    </div>
                    <div className="addCall mt-4 d-flex align-items-center w-75">
                        <i className="fas fa-phone-alt fs-4 brandGoldTxt d-block rounded-circle border addLogo p-2 me-3"></i>
                        <div className="addText">
                            <a className="mb-0 fw-bold fs-5 addtxt1 nav-link" href="tel:+91 07738736881">07738736881</a>
                        </div>
                    </div>
                </div>
                <div className="footerLogo container-fluid text-center mt-3">
                    <img src="./assests/images/yetiLogo.png" className="img-fluid" alt=""/>
                </div>
                <div className="rightsNCredit container-fluid d-flex justify-content-between">
                    <div className="rights text-muted">
                        &copy;2023. All Rights Reserved.
                    </div>
                    <div className="credits text-muted">
                        Vikas Kanoo
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer