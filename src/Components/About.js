import React from "react";
import '../SCSS/Home.scss';

const About = (props) => {
    return (
        <div ref={props.refProp} className="AboutContainer">
            <div className="AboutImage">
                <img src='https://res.cloudinary.com/chiaka1996/image/upload/v1624493929/images_9_d1bsmj.jpg'
                 alt="a woman in her store" />
            </div>

            <div className="aboutDescription">
                <div className="header">Digitizing Africa's</div>
                <div className="header">Informal Economy</div>
                <div className="descriptionNotes">
                    <div> Bringing Financial Services to the excluded,</div>
                    <div>Underated and overlooked businesses in the</div>
                    <div>informal Econonomy</div>
                </div>
                <div><button>Get started</button></div>
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1624547631/googleImg_b2gb1r.png"
                    alt="google play" />
                    </div>
        </div>
    )
}

export default About;