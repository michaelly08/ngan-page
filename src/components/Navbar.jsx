import React from 'react'


import Logo from "./img/WebLogo.png"
import emoji1 from "./img/emoji1.png"
import emoji2 from "./img/emoji2.png"
import emoji3 from "./img/emoji3.png"



const Navbar = () => {

    const show = () => {
        document.querySelector(".navbar-container").classList.add("is-active");
    }

    const hide = () => {
        document.querySelector(".navbar-container").classList.remove("is-active");
    }


  return (
    <div className="navbar-container">
        <div className="navbar-wrapper">

            <div className="navbar-logo">
                <img src={Logo}></img>

                
            </div>

            
            
            <div className="navbar-options"> 
                <div className="close-menu" onClick={hide}>x</div>

                <a href="#experience" className="navbar-box">
                    <span className="color-change">W</span>
                    <span className="color-change">o</span>
                    <span className="color-change">r</span>
                    <span className="color-change">k</span>
                    <div className="emoji"><img src={emoji1}></img></div>

                </a>

                <a href="#projects" className="navbar-box">
                    <span className="color-change">A</span>
                    <span className="color-change">b</span>
                    <span className="color-change">o</span>
                    <span className="color-change">u</span>
                    <span className="color-change">t</span>
                    <div className="emoji"><img src={emoji2}></img></div>

                </a>

                <a href="#contact-me" className="navbar-box contact-me-button">
                    <span className="text-to-replace">Say Hello!</span>
                    <div className="emoji replace-text"><img src={emoji3}></img></div>
                </a>
            </div>

            <div className="navbar-menu-button" onClick={show}> 
                <i className='bx bx-menu-alt-right'></i>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar