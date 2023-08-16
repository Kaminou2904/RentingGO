import React from 'react';
import './Morecard.css';

function Morecard(props) {
  return (
    <div className='morecard mt-4 p-2 rounded-3 me-2'>
       <div className="moreImg w-25">
            <img src={props.icon} alt="fine quality icon" className='img-fluid'/>
       </div>
       <div className="moreTxt">
            <p className="fw-bold fs-5 mb-0">{props.head}</p>
            <p className="text-muted fs-6 mb-0">
                {props.para}
            </p>
       </div>
    </div>
  )
}

export default Morecard