import React from 'react'
import './userdashboardhomepage.css'
import { BsArrowRightShort } from 'react-icons/bs'
import {MdOutlineDone} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import {IoIosArrowRoundUp,IoIosArrowRoundDown} from 'react-icons/io'
import {MdOutlineContentCopy} from 'react-icons/md'
import {FiLink} from 'react-icons/fi'
const Userdashboardhomepage = ({route}) => {
    const navigate = useNavigate()
    const [clipBoard, setClipBoard] = useState(false)
    const [userData, setUserData] = useState()
    const [loader,setLoader] = useState(false)
    const copy = ()=>{
        navigator.clipboard.writeText(clipRef.current.value)
    }
    const clipRef = useRef(null)
    useEffect(()=>{
        setLoader(true)
        if(localStorage.getItem('token')){
            const getData = async()=>{
                const req = await fetch(`${route}/api/getData`,{
                    headers: {
                    'x-access-token': localStorage.getItem('token')
                    }
                })
                const res = await req.json()
                setUserData(res)

                if (res.status === 'error') {
                    navigate('/login')
                }
                setLoader(false) 
            }
            getData()
        }
        else{
            navigate('/login')
        }
    },[])
  return (
    <div className='homewrapper'>
      {
        loader &&
          <div className="wifi-loader-container">
            <div class="loader">
              <span class="l">s</span>
              <span class="o">t</span>
              <span class="a">a</span>
              <span class="d">r</span>
              <span class="i">w</span>
              <span class="n">o</span>
              <span class="g">o</span>
              <span class="d1">d</span>
              <span class="d2">c</span>
              <span class="d3">a</span>
              <span class="d4">p</span>
              <span class="d5">i</span>
              <span class="d6">t</span>
              <span class="d7">a</span>
              <span class="d7">l</span>
            </div>
        </div>
      }
    <div className='dashboardhomepage'>
       
        <div className="dashboardhomepagewrapper">
            <div className="welcome-kyc-section">
                <p>wallet Balance</p>
                <div className="username-container">
                    <h2>${userData ? userData.funded : ''}.00 USD</h2>
                </div>
            </div>
            <div className="overview-container">
                <div className="overview-card">
                    <div className="amount-header">
                        <h2>Total Deposit</h2>
                        <div className="amount-holder">
                            <h3>$ {userData && userData.totaldeposit !== undefined ? userData.totaldeposit : ''}.00 USD</h3>
                            <span className="arrow-p">
                                <p>1.93%</p>
                                <IoIosArrowRoundUp />
                            </span>
                        </div>
                    </div>
                    <div className="amount-pouches">
                        <h2>current deposit</h2>
                        <h3>${userData && userData.deposit.length !== 0 ? userData.deposit[userData.deposit.length - 1].amount : 0}.00 USD</h3>
                    </div>
                    <div className="amount-pouches">
                        <h2>invested</h2>
                        <h3>$ {userData && userData.invest.length !== 0 ? userData.invest[userData.invest.length - 1].amount : 0}.00 USD</h3>
                    </div>
                    <img src="/bar.png" alt="" className="bar"/>
                </div>
                <div className="overview-card">
                <div className="amount-header">
                        <h2>Total Withdraw</h2>
                        <div className="amount-holder">
                            <h3>${userData ? userData.totalwithdraw : ''}.00 USD </h3>
                            <span className="red">
                                <p>1.93%</p>
                                <IoIosArrowRoundDown />
                            </span>
                        </div>
                    </div>
                    <div className="amount-pouches">
                        <h2>interest earned</h2>
                        <h3>${userData ? userData.periodicProfit : '0'}.00 USD</h3>
                    </div>
                    <div className="amount-pouches">
                        <h2>referral commission</h2>
                        <h3>${userData ? userData.refBonus : '0'}.00 USD</h3>
                    </div>
                    <img src="/bar2.png" alt="" className="bar" />
                </div>
                <div className="overview-card">
                <div className="amount-header">
                        <h2>Balance in Account</h2>
                        <div className="amount-holder">
                            <h3>${userData ? userData.funded : ''}.00 USD </h3>
                            
                        </div>
                    </div>
                    <div className="amount-pouches">
                        <h2>from deposits</h2>
                        <h3>${userData ? userData.totaldeposit : ''}.00 USD</h3>
                    </div>
                    <div className="amount-pouches">
                        <h2>withdrawable profit after duration</h2>
                        <h3>${userData ? userData.totalprofit + userData.refBonus : ''}.00 USD</h3>
                    </div>
                    <img src="/bar3.png" alt="" className="bar" />
                </div>
            </div>
            <div className="price-chartt-section">
                <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" style={{width:"100%",height:"536px",scrolling:"none",marginWidth:"0",marginHeight:"0", frameBorder:"0", border:"0",lineHeight: '14px'}}></iframe>
            </div>
            <div className="referral-section">
                <div className="referral-card1">
                    <div className="referraltext-wrapper">
                        <div className="referral-text-container">
                            <h2>refer us and earn 10% of every downline deposit</h2>
                            <p>Use the bellow link to invite your friends.</p>
                        </div>
                        <button className="invite-btn">invite</button>
                    </div>
                    <div className="click-to-copy-container">
                        <span className='clipboard-btn'>
                            <FiLink />
                        </span>
                        <input type="text" value={userData ? `passiveincomeinvest.org/user/${userData.username ? userData.username : userData.referral}` : ''} ref={clipRef}/>
                        <span className={`clipboard-btn ${clipBoard ? <MdOutlineDone /> : ''}` } onClick={()=>{
                            copy()
                            setClipBoard(!clipBoard)
                              }}>   
                            {
                                clipBoard ?
                                <MdOutlineDone /> : <MdOutlineContentCopy />
                            }
                        </span>
                    </div>  
                </div>
                <div className="referral-card1">
                    <div className="referraltext-wrapper">
                        <div className="referral-text-container">
                            <h2>my referral</h2>
                        </div>
                        <div className="referral-text-container small-card">
                            <h2>{userData ? userData.referred.length : '        '}</h2>
                            <p>referred users</p>
                        </div>
                        <div className="referral-text-container small-card">
                            <h2>{userData ? userData.refBonus : '        '} USD</h2>
                            <p>referral commission</p>
                        </div>

                    </div>
                    <img src="/bar4.png" alt="" className="bar4" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Userdashboardhomepage