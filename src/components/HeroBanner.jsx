import React from 'react'
import Pen from "./img/Pen.png"
import Emoji from "./img/emoji3.png"

const HeroBanner = () => {
    return (
        <div className="herobanner-container">
            <div className="herobanner-wrapper">


                <div className="herobanner-box herobanner-titles">
                    <div className="herobanner-title">
                        <img src={Emoji}></img>
                        I am&nbsp; <span className="herobanner-highlight">Ngan Nguyen</span>
                    </div>
                    <div>
                        I am UX/UI designer based in Vietnam. With a 
                        background  in business, my special skills combine 
                        human-centered design and business strategy.
                    </div>
                </div>

                <div className="herobanner-box herobanner-image">
                    <div>
                        <img src={Pen}></img>
                    </div>
                </div>

            </div>

            <div className="">
                <i className='bx bx-down-arrow-circle'></i>
                <i className='bx bx-down-arrow-circle'></i>
                <i className='bx bx-down-arrow-circle'></i>
            </div>
        </div>
    )
}

export default HeroBanner