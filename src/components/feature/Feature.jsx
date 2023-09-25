import React from 'react'
import './feature.css'
import {FaGlobeAmericas} from 'react-icons/fa'
import {BsBank} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import { RiExchangeDollarLine } from 'react-icons/ri'
import {CgArrowsExchangeV} from 'react-icons/cg'
const Feature = () => {
  return (
    <section className='info-section'>
      <div className="info-wrapper">
        <div className="info-left-card-container">
          <div className="info-left-card" data-aos="fade-up">
            <FaGlobeAmericas />
            <h2>86+</h2>
            <p>supported countries</p>
          </div>
        </div>
        <div className="info-right-card-container">
          <div className="info-right-card" data-aos="fade-up">
            <RiExchangeDollarLine />
            <h2>10K+</h2>
            <p>investments</p>
          </div>
          <div className="info-right-card" data-aos="fade-up">
            <BsBank />
            <h2>3.5+</h2>
            <p>successful withdrawals</p>
          </div>
          <div className="info-right-card" data-aos="fade-up">
            <FaUsers />
            <h2>1.3k</h2>
            <p>active investors</p>
          </div>
          <div className="info-right-card" data-aos="fade-up">
            <CgArrowsExchangeV />
            <h2>6.5+</h2>
            <p>successful deposits</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature