import React from "react";
import '../SCSS/Home.scss';

const GetProduct = (props) => {
    return (
        <div className="allContainer">
        <div className="getProductContainer" >
            <div className="getProductNotes">
            <div className="getHeader">Get product at best prices</div>
            <div className="getNotes">
            Find verified distributors on Rain, <br/> select products,
            place order and <br/> have it delivered to your store <br/> same day.
            <br/>
                <button>Go Shopping</button>        
            </div>
            </div>
            <div className="imgContainer">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624540738/products_image1_j2l1io.png"
                 alt="mobile phone showing store products" />
            </div>
        </div>

        <div ref={props.refProp} className="paymentCulture">
            <div className="paymentHeader"> A new & better payment culture</div>
            <div className="paymentNotes">
            Embrace  a new payment<br/> experience by making<br/>
             payment via Rain to distributors
            </div>
            <div>
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624547631/googleImg_b2gb1r.png"  alt="google play" />
            </div>
        </div>

        <div className="bye_bye">
        Say bye-bye to<br/>
        long  queues & bank charges
        </div>

        <div className="currentAccount">
            <div className="zeroAccount">
            N0.00 current account that renders delight<br/> 
             service to your business
            </div>

            <div className="longQue">
            Long queues in bank branches <br/>
            do not exist with Rain
            </div>
        </div>

        <div className="sendMoney">
            <div className="sendMoneyImage"> 
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624553142/products_image2_kgazic.png"
                 alt="mobile phone showing profile" />
            </div>

            <div className="sendMoneyNote">
            Send money to<br/> fellow Rain users,<br/>
            other Banks & <br/> Fintech platform
            </div>
            </div>

            <div className="accessLoan">
                <div className="acessLoanHeader">
                Access credit & loan facilities 
                </div>

                <div className="accessLoanNote">
                <div>From the comfort of your phone,</div>
                <div>apply for & get loans based on your</div>
                <div className="credit">credit score</div>
                </div>
                <div className="accessImage">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624555663/products_image4_ezgnq1.png"
                    alt="rain mobile phone logo" className="screen_one" />
                
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624555700/products_image3_lrdi37.png"
                    alt="mobile phone showing profile" className="screen_two"/>
                    </div>
            </div>
        </div>
    );
}

export default GetProduct;