import React from 'react';
import './Categories.css';

function Categories(props) {
  return (
    <div>
        <div className="main mt-2">
            <div className="categorycard bg-light rounded-3 text-center p-2 me-2">
                <div className="categoryimg p-3">
                    <img src={props.img} alt="package icon" className='img-fluid' />
                </div>
                <div className="categoryTxt">
                    {props.txt}
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Categories