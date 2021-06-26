import React, {useRef} from "react";
import Navigation from "../Components/Navigation";
import About from "../Components/About";
import GetProduct from "../Components/GetProduct";
import Service from "../Components/Service";
import SolveIssues from "../Components/SolveIssue";
import Footer from '../Components/Footer';
import '../SCSS/Home.scss';

const Home = () => {
    const myContact = useRef(null);

    const myAbout = useRef(null);

    const myService = useRef(null);

    const mySignup = useRef(null);

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

    const scrollToTheTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    return (
        <div>
            <Navigation 
            scrollToRef = {scrollToRef} 
            myContact ={myContact}
            myAbout = {myAbout}
            mySignup = {mySignup}
            myService = {myService} 
            scroll = {scrollToTheTop}
            />
            <About
             refProp = {myAbout}
             />
            <GetProduct refProp = {mySignup}/>
            <Service refProp = {myService}/>
            <SolveIssues />
            <Footer
            scrollToRef = {scrollToRef} 
            myAbout = {myAbout} 
            refProp = {myContact} />
        </div>
    )
    }

export default Home;