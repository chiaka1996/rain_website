import React from 'react';
import '../SCSS/Home.scss';

const Footer = (props) => {
    return (
        <div ref={props.refProp} className="footerContainer">
            <div className="footerHeader">Partnering with mom &pop stores<br/>
                to digitize the informal economy.
            </div>
            
            <div className="footerLink">
            <div className="footerLinks_one">
                <ul>
                    <li>Login</li>
                    <li>Open Account</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className="footerLinks_two">
                <ul>
                    <li onClick={()=>props.scrollToRef(props.myAbout)}>About</li>
                    <li>Contact Us</li>
                    <li>Twitter</li>
                    <li>Whatssap</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer;