import React from "react";
import '../SCSS/Home.scss';

const Navigation = (props) => {
    return (
        <div className="NavigationContainer">
        <div className="logoAndBrand">
            {/* <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624485836/rain-logo_ceavls.png" alt="brand Logo" />*/}

            Rain
        </div>
        <div className="flexDiv"></div>
        <span className="links">Home</span>
        <span onClick={()=>props.scrollToRef(props.myService)} className="links">Service</span>
        <span onClick={()=>props.scrollToRef(props.myAbout)} className="links">About Us</span>
        <span onClick={()=>props.scrollToRef(props.myContact)} className="links">Contact Us</span>
        <button className="signupButton">Sign up</button>
        </div>
    )
    }

export default Navigation;