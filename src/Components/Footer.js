import React from 'react';
import '../SCSS/Home.scss';

const Footer = (props) => {
    return (
        <div ref={props.refProp} className="footerContainer">
            <div className="footerHeader">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624823992/20210627_162127_0000_tyolhg_lveson.png"
                alt="footer banner" />
                <span>Partnering with mom &pop stores<br/>
                to digitize the informal economy.</span>
            </div>
            
            <div className="footerLink">
            <div className="footerLinks_one">
                <ul>
                    <li>Blog</li>
                    <li>Open Account</li>
                </ul>
            </div>

            <div className="footerLinks_two">
                <ul>
                    <li onClick={()=>props.scrollToRef(props.myAbout)}>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="footerLinks_three">
            <ul>
                    <li>Twitter</li>
                    <li>Whatssap</li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer;