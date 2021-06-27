import React from "react";
import '../SCSS/Navigation.scss';

const Navigation = (props) => {
    return (
        <div className="NavigationContainer">
        <div className="logoAndBrand">
        <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624811647/20210627_162220_0000_yxm1io_icq6qe.png" alt="brand Logo" />
        </div>
        <div className="flexDiv"></div>
        <span onClick={()=>props.scroll()} className="links">Home</span>
        <span onClick={()=>props.scrollToRef(props.myService)} className="links">Service</span>
        <span onClick={()=>props.scrollToRef(props.myAbout)} className="links">About Us</span>
        <span onClick={()=>props.scrollToRef(props.myContact)} className="links">Contact Us</span>
        <button onClick={()=>props.scrollToRef(props.mySignup)} className="signupButton">Sign up</button>
        
        <div onClick={()=>props.sideBarDisplay(!props.displaySideBar)} className="hamburger">
            <span className={props.displaySideBar ? 'bar_one':'bar'}></span>
            <span className={props.displaySideBar ? 'bar_two':'bar'}></span>
            <span className={props.displaySideBar ? 'bar_three':'bar'}></span>

        </div>
        
        </div>
    )
    }

export default Navigation;