import React from 'react';
import '../SCSS/Service.scss'; 

const Service = (props) => {
    return (
        <div ref={props.refProp} className="serviceContainer">
            <div className="ourProductHeader">Our Products</div>

            <div className='productButtons'>

                <div className="firstLevel">
                    <button className="procurement">Product procurement</button>
                    <button className="savings">Savings</button>
                </div>

                <div className="secondLevel">
                    <button className="ledger">Digital Ledger</button>
                    <button className="expense">Expense Management</button>
                </div>

                <div className="thirdLevel">
                    <button className='facilities'>Credit faciliteies</button>
                </div>

                <div className="fourthLevel">
                    <button className="ajo">Ajo (Esusu)</button>
                    <button className="debts">Track debts</button>
                </div>

                <div className='fifthLevel'>
                    <button className="fund">Send fund</button> 
                </div>
            </div>
        </div>
    )
}

export default Service;