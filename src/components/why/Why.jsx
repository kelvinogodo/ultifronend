import React from 'react'
import './why.css'
import {BiBuildingHouse} from 'react-icons/bi'
import {GiBrain} from 'react-icons/gi'
import {GiCardExchange} from 'react-icons/gi'
const Why = () => {
  return (
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>why choose us</h2>
            </div>
            <h1 data-aos="fade-up">starwood capital</h1>
            <p data-aos="fade-up">Throughout its history, the Firm has created a number of market-leading platforms to enhance operational efficiencies and maximize the value of its investments. These platforms include:</p>
        </div>
        <div className="why-choose-us-card-container">
            <div className="why-choose-us-card" data-aos="fade-up">
                <BiBuildingHouse />
                <h2>professionalism</h2>
                <p>A seasoned, stable executive committee that has worked together an average of 26 years and possesses an average of 31 years of industry experience.</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <GiBrain/>
                <h2>achievements</h2>
                <p>Launched Treehouse Hotels brand Starwood Opportunity Zone Fund I closes at $304M.Extensive public markets expertise, having guided IPOs for multiple leading companies.</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <GiCardExchange />
                <h2>flexibility</h2>
                <p>The investment flexibility to shift between real estate asset classes, geographies and positions in the capital stack as the Firm perceives risk-reward dynamics to be evolving.</p>
            </div>
        </div>
    </div>
  )
}

export default Why