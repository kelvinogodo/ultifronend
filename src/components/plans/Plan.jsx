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
          type: 'commercial lending',
            percent: '62.1%',
          content: [
          'originate floating-rate first mortgage loans','$7.08 portfolio carrying value','3-5 year average term','loan to value ratio','nearly $256 invested since inception with $0 of realization loan losses' 
        ],
          percent:'8%'
        },
        {
          id:2,
          min:5000,
          max:9999,
          image:'/bnb.png',
          method:'USDT',
          type:'residencial lending',
          percent: '10%',
          content: [
          'invest in non-agency residential loans and RMBS','$860M portfolio carrying value, including $613M of loans','Non-agency loans have 63% loan-value-ratio','target mid-teens levered returns' 
        ],
        },
        {
          id:3,
          min:10000,
          max:29999,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'owned real estate',
          percent: '16%',
          content: [
          'invest in high qaulity stable real estate assets','unique ability to acquire assets out of CMBS trusts','$2.78 portfolio carrying value','9% to 12%' 
        ],
        },
        {
          id:4,
          min:30000,
          max:59999,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'CMBS investing',
          percent: '24%',
          content: [
          'originate floating-rate first mortgage loans','$7.08 portfolio carrying value','3-5 year average term','loan to value ratio','nearly $256 invested since inception with $0 of realization loan losses' 
        ],
        },
        {
          id:5,
          min:60000,
          max:99999,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'special servicing',
          percent: '30%',
          content: [
          'originate floating-rate first mortgage loans','$7.08 portfolio carrying value','3-5 year average term','loan to value ratio','nearly $256 invested since inception with $0 of realization loan losses' 
        ],
        },
        {
          id:6,
          min:100000,
          max:500000,
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'CMBS loan origination',
          percent: '50%',
          content: [
          'originate floating-rate first mortgage loans','$7.08 portfolio carrying value','3-5 year average term','loan to value ratio','nearly $256 invested since inception with $0 of realization loan losses' 
        ],
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
                  <span className="plan-title">{withdrawmethod.type}</span>
                  <span className="price">...</span>
                </div>
                    <ul className="lists">
                      {
                        withdrawmethod.content.map(content => <li className="list">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>{content}</span>
						</li>)
            }
					</ul>
					<button type="button" className="action">Get Started</button>
				</div>
        ))}
        </div>
    </div>
  )
}

export default Plan