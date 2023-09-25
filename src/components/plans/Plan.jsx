import React from 'react'
import './plan.css'
import { useState } from 'react'
import {RxDash} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
const Plan = () => {
    const navigate = useNavigate()
    const [withdrawMethods,setWithdrawalMethods] = useState([
        {
          id:1,
          min:300,
          max:4999,
          image:'/btc.png',
          method:'BTC',
          type:'basic plan',
          percent:'8%'
        },
        {
          id:2,
          min:5000,
          max:9999,
          image:'/bnb.png',
          method:'USDT',
          type:'mega plan',
          percent:'10%'
        },
        {
          id:3,
          min:10000,
          max:29999,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'ultra plan',
          percent:'16%'
        },
        {
          id:4,
          min:30000,
          max:59999,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'vip plan',
          percent:'24%'
        },
        {
          id:5,
          min:60000,
          max:99999,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'premium plan',
          percent:'30%'
        },
        {
          id:6,
          min:100000,
          max:500000,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'ultimate plan',
          percent:'50%'
        },
      ])
  return (
    <div className='plan-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>our plans</h2>
            </div>
            <h1 data-aos="fade-up">choose an investment plan</h1>
            <p data-aos="fade-up">choose an investment plan of your choice, but remember , the bigger the investment the bigger the return</p>
        </div>
        <div className="plan-card-container">
        {
                withdrawMethods.map((withdrawmethod) => (
                  <div className="card">
<div className="plan-header">
						<span className="plan-title">Beginner</span>
						<span className="price">Free</span>
					</div>
					<p className="desc">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul className="lists">
						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" className="action">Get Started</button>
				</div>
                  ))}
        </div>
    </div>
  )
}

export default Plan