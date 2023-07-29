import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Header from '../../components/Header/Header';

function Dashboard() {

    const [Forms, setForms] = useState([]);

    const fetchingFunc = async ()=>{
        try {
            const res = await fetch('https://rentinggoapi.onrender.com/getform');
            const data = await res.json();
            const formsArray = Object.values(data);
            console.log(formsArray)
            setForms(formsArray);
        } catch (error) {
            alert('error occured while fetching the forms');
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchingFunc();
    },[])

  return (
    <div>
        <Header headTxt1="Dash" headTxt2="Board" back="none"/>
        <div className="container-fluid pt-5">
           <div className="tableHeadingDiv pt-5 border-bottom pb-2">
              <div className="tableHeading row p-0 ps-3">
                    <h4 className='col-2 text-center p-0'>Product Name</h4>
                    <h4 className='col-2 text-center p-0'>Amount</h4>
                    <h4 className='col-2 text-center p-0'>Number</h4>
                    <h4 className='col-2 text-center p-0'>Date</h4>
                    <h4 className='col-2 text-center p-0'>Date of filling</h4>
                    <h4 className='col-2 text-center p-0'>Call of Action</h4>
              </div>
           </div>

           {
                Forms.map((form, index)=>(
                    <div key={index} className="tableData d-flex justify-content-between pt-3 ps-2 border-bottom">
                        <p className="col-2 p-0 text-center fs-6">{form.proname}</p>
                        <p className="col-2 p-0 text-center fs-6">{form.amount}</p>
                        <p className="col-2 p-0 text-center fs-6">{form.phoneNo}</p>
                        <p className="col-2 p-0 text-center fs-6">{form.day}</p>
                        <p className="col-2 p-0 text-center fs-6">{form.submitDate}</p>
                        <p className="col-2 p-0 text-center fs-6">Check | Delete</p>
                    </div>
                ))
           }

        </div>
    </div>
  )
}

export default Dashboard