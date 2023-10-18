import React, {useState,useEffect,useRef}from 'react'
import { useNavigate } from 'react-router-dom'
import {MdOutlineContentCopy} from 'react-icons/md'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import './userdashboardreferrals.css'
import Loader from '../Loader'
const Userdashboardreferrals = ({route}) => {
  const [clipBoard, setClipBoard] = useState(false)
  const [loader,setLoader] = useState(false)
    const copy = ()=>{
        navigator.clipboard.writeText(clipRef.current.value)
    }
    const clipRef = useRef(null)
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
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
            setLoader(false)
        }
        getData()
    }
    else{
        navigate('/login')
    }
      
},[])
  return (
    <div>
        <Userdashboardheader route={route}/>
        {
        loader && 
          <Loader/>
        }
          {userData && userData.referred.length !== 0 ? 
          <div className="page-swiper-wrapper">
          <div className="page-header">
              <h3>checkout your referral logs</h3>
              <h2>Referral Logs</h2>
              <p>refer more friends to get a <b>100 USD</b> bonus</p>
          </div>
          <div className="transaction-container no-ref">
            <table>
                <thead>
                  <tr>
                    <td>Firstname</td>
                    <td>Lastname</td>
                    <td>Joined At</td>
                    <td>Email</td>
                    <td>Bonus Earned</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    userData.referred.map(refer =>
                      <tr>
                        <td>{refer.firstname}</td>
                        <td>{refer.lastname}</td>
                        <td>{refer.date}</td>
                        <td>{refer.email}</td>
                        <td>${refer.bonus} USD</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              </div>
            </div>
          :
          <div className="page-swiper-wrapper">
          <div className="failure-page no-referral-page">

            <img src="/ref.png" alt="" className='failure-img'/>
            <p>You haven't referred any user yet, click below to copy your referral link</p>
            <div className="click-to-copy-container">
                <input type="text" value={`starwoodcapital.org/user/${userData && userData.username}`} ref={clipRef}/>
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
          </div>
          }
         
    </div>
  )
}

export default Userdashboardreferrals