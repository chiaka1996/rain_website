import React from 'react';
import '../SCSS/Navigation.scss';

const SideBar = (props) => {
    return(
        <div className={props.displaySideBar? 'sidebar' : 'noSidebar'}>
        <div onClick={()=>props.scroll()}>Home</div>
        <div onClick={()=>props.scrollToRef(props.myService)}>Service</div>
        <div onClick={()=>props.scrollToRef(props.myAbout)}>About</div>
        <div onClick={()=>props.scrollToRef(props.myContact)}>Contact</div>
        <button onClick={()=>props.scrollToRef(props.mySignup)}>Sign up</button>
        
        </div>
    )
}

export default SideBar;