import React from 'react'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import { FiArrowRight } from 'react-icons/fi'
import {FaApplePay} from 'react-icons/fa'
import {BsPaypal} from 'react-icons/bs'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {MdClose} from 'react-icons/md'
import Swal from 'sweetalert2';
import WithdrawReview from '../WithdrawReview';
import { Pagination, Navigation } from "swiper";
import {
  BsBank
} from 'react-icons/bs'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { motion,AnimatePresence } from 'framer-motion'
// import { Pagination, Navigation ,FreeMode} from "swiper";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BankForm from '../BankForm';
import Loader from '../Loader'
const Userdashboardwithdraw = ({ route }) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [activeMethod, setActiveMethod] = useState()
  const [checkoutPage, setCheckoutPage] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState()
  const [showCrypto, setShowCrypto] = useState(false)
  const [showBank, setShowBank] = useState(false)
  const [chooseMethod, setChooseMethod] = useState(true)
  const [withdrawMethods, setWithdrawalMethods] = useState([
    {
      id: 1,
      min: 10,
      max: 1000000,
      image: '/btc.png',
      method: 'BTC',
    },
    {
      id: 2,
      min: 10,
      max: 1000000,
      image: '/etherium.png',
      method: 'ETH',
    },
    {
      id: 3,
      min: 10,
      max: 1000000,
      image: '/bnb.png',
      method: 'BNB (bep20)',
    },
  ])

  // sweet alert codes 

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const close = () => {
    setCheckoutPage(false)
  }
  const closecurrent = () => {
    setChooseMethod(true)
    setShowCrypto(false)
    setShowBank(false)
  }
  const [bankName, setBankName] = useState()
  const [amount, setAmount] = useState()
  const [loader, setLoader] = useState(false)
  const [accountNumber,setAccountNumber] = useState()
  const withdraw = async ()=>{
        setLoader(true)
        const token = localStorage.getItem('token')
        const req = await fetch(`${route}/api/withdraw`,{
            method:'POST',
            headers : {
                'Content-Type':'application/json',
                'x-access-token': token
            },
            body: JSON.stringify({
                wallet:bankName,
                WithdrawAmount:amount,
                method: 'bank',
                account:accountNumber
            })
        })
        const res = await req.json()
        setLoader(false)
        if(res.status === 'ok'){
              Toast.fire({
                icon: 'success',
                title:  `You have successfully placed your withdrawal of ${res.withdraw}. kindly wait for few minutes to be approved by management,Thanks!`
              })
            
            const data = {
            service_id: 'service_w5tn3rs',
            template_id: 'template_q0lp31r',
            user_id: 'QdH5BsljbU-7A-LJa',
            template_params: {
                'name': `${res.name}`,
                'email': `${res.email}`,
                'message': `${res.message}`,
                'reply_to': `starwoodscapital@gmail.com`,
                'subject':`${res.subject}`
            }
            };
            const adminData = {
            service_id: 'service_w5tn3rs',
            template_id: 'template_q0lp31r',
            user_id: 'QdH5BsljbU-7A-LJa',
            template_params: {
                'name': `Armani`,
                'email': `starwoodscapital@gmail.com`,
                'message': `${res.adminMessage}`,
                'reply_to': `${res.email}`,
                'subject':`${res.subject}`
            }
            };
         
            const sendMail= async()=>{
            await Promise.all([ fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data), 
            }),
                fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(adminData), 
            })
            ])    
        }
        sendMail()
          setBankName('')
          setAmount('')
          setAccountNumber('')
        }

        else{
              Toast.fire({
                icon: 'warning',
                title:  `${res.withdrawMessage}`
              })
            const data = {
            service_id: 'service_w5tn3rs',
            template_id: 'template_q0lp31r',
            user_id: 'QdH5BsljbU-7A-LJa',
            template_params: {
                'name': `${res.name}`,
                'email': `${res.email}`,
                'message': `${res.withdrawMessage}`,
                'reply_to': `starwoodscapital@gmail.com`,
                'subject':`${res.subject}`
            }
            };
            const sendMail = async () => {
                await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data), 
            })
            }
            sendMail()
            setBankName('')
            setAmount('')
            setAccountNumber('')
        }
    }
  return (
    <>
       
       <Userdashboardheader route={route} />
          <div className="floating-btn" onClick={()=>{
              closecurrent()
          }}>
            <AiOutlineArrowLeft />
      </div>
      {
        loader && 
          <Loader />
        }
    {
      !checkoutPage &&
      <div>
          {
            showModal &&
          <AnimatePresence 
            initial={{y:45, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.65,delay:0.4}}
          >
          <motion.div 
            
          >
            <div className="modal-container">
              <div className="modal">
                <div className="modal-header">
                  <h2>withdrawal via {activeMethod.method}</h2>
                  <p>min: {activeMethod.min} </p>
                </div>
              <MdClose className='close-modal-btn' onClick={()=>{setShowModal(false)}}/>
                <div className="modal-input-container">
                  <div className="modal-input">
                    <input type="text" placeholder='0.00' onChange={(e)=>{
                      setWithdrawAmount(parseInt(e.target.value))
                    }}/>
                    <span>USD</span>
                  </div>
                </div>
                <div className="modal-btn-container">
                  <button class="noselect" onClick={()=>{
                    setShowModal(false)
                  }}>
                    <span class="text">close</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg"       width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                  </button>
                  <button className='next' onClick={()=>{
                    if(withdrawAmount >= activeMethod.min){
                      setCheckoutPage(true)
                    }
                    else if(isNaN(withdrawAmount)){
                      Toast.fire({
                        icon: 'warning',
                        title: `Amount must be a number`
                      })
                    }
                    else{
                      Toast.fire({
                        icon: 'warning',
                        title: `Amount is less than withdrawal limit`
                      })
                      setCheckoutPage(false)
                    }
                  }}>
                    <span class="label">Next</span>
                    <span class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            </motion.div>
          </AnimatePresence >
          }
           
            {
              chooseMethod &&
              <div className="overlay-modal">
                  <div class="overlay-card">
                    <BsBank />
                <p class="cookieHeading">choose a withdrawal method</p>
                <p class="cookieDescription"><br/><a mailto="#"></a>.</p>
                <div class="buttonContainer">
                      <button class="acceptButton" onClick={() => {
                        setChooseMethod(false)
                        setShowBank(true)
                        setShowCrypto(false)
                  }}>bank</button>
                      <button class="declineButton" onClick={() => {
                        setChooseMethod(false)
                        setShowCrypto(true)
                        setShowBank(false)
                  }}>crypto</button>
                </div>
              </div>
            </div>
            }
            
            {
              showBank &&
              <div className="bank-form-container">
                  <div class="bank-modal">
                    <form class="bank-form">
                      <div class="payment--options">
                        <button name="paypal" type="button">
                          <BsPaypal />
                        </button>
                        <button name="apple-pay" type="button">
                          <FaApplePay />
                        </button>
                        <button name="google-pay" type="button">
                    <svg fill="none" viewBox="0 0 80 39" height="39" width="80" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_134_34)">
                    <path fill="#5F6368" d="M37.8 19.7V29H34.8V6H42.6C44.5 6 46.3001 6.7 47.7001 8C49.1001 9.2 49.8 11 49.8 12.9C49.8 14.8 49.1001 16.5 47.7001 17.8C46.3001 19.1 44.6 19.8 42.6 19.8L37.8 19.7ZM37.8 8.8V16.8H42.8C43.9 16.8 45.0001 16.4 45.7001 15.6C47.3001 14.1 47.3 11.6 45.8 10.1L45.7001 10C44.9001 9.2 43.9 8.7 42.8 8.8H37.8Z"></path>
                    <path fill="#5F6368" d="M56.7001 12.8C58.9001 12.8 60.6001 13.4 61.9001 14.6C63.2001 15.8 63.8 17.4 63.8 19.4V29H61V26.8H60.9001C59.7001 28.6 58 29.5 56 29.5C54.3 29.5 52.8 29 51.6 28C50.5 27 49.8 25.6 49.8 24.1C49.8 22.5 50.4 21.2 51.6 20.2C52.8 19.2 54.5 18.8 56.5 18.8C58.3 18.8 59.7 19.1 60.8 19.8V19.1C60.8 18.1 60.4 17.1 59.6 16.5C58.8 15.8 57.8001 15.4 56.7001 15.4C55.0001 15.4 53.7 16.1 52.8 17.5L50.2001 15.9C51.8001 13.8 53.9001 12.8 56.7001 12.8ZM52.9001 24.2C52.9001 25 53.3001 25.7 53.9001 26.1C54.6001 26.6 55.4001 26.9 56.2001 26.9C57.4001 26.9 58.6 26.4 59.5 25.5C60.5 24.6 61 23.5 61 22.3C60.1 21.6 58.8 21.2 57.1 21.2C55.9 21.2 54.9 21.5 54.1 22.1C53.3 22.6 52.9001 23.3 52.9001 24.2Z"></path>
                    <path fill="#5F6368" d="M80 13.3L70.1 36H67.1L70.8 28.1L64.3 13.4H67.5L72.2 24.7H72.3L76.9 13.4H80V13.3Z"></path>
                    <path fill="#4285F4" d="M25.9 17.7C25.9 16.8 25.8 15.9 25.7 15H13.2V20.1H20.3C20 21.7 19.1 23.2 17.7 24.1V27.4H22C24.5 25.1 25.9 21.7 25.9 17.7Z"></path>
                    <path fill="#34A853" d="M13.1999 30.5999C16.7999 30.5999 19.7999 29.3999 21.9999 27.3999L17.6999 24.0999C16.4999 24.8999 14.9999 25.3999 13.1999 25.3999C9.7999 25.3999 6.7999 23.0999 5.7999 19.8999H1.3999V23.2999C3.6999 27.7999 8.1999 30.5999 13.1999 30.5999Z"></path>
                    <path fill="#FBBC04" d="M5.8001 19.8999C5.2001 18.2999 5.2001 16.4999 5.8001 14.7999V11.3999H1.4001C-0.499902 15.0999 -0.499902 19.4999 1.4001 23.2999L5.8001 19.8999Z"></path>
                    <path fill="#EA4335" d="M13.2 9.39996C15.1 9.39996 16.9 10.1 18.3 11.4L22.1 7.59996C19.7 5.39996 16.5 4.09996 13.3 4.19996C8.3 4.19996 3.7 6.99996 1.5 11.5L5.9 14.9C6.8 11.7 9.8 9.39996 13.2 9.39996Z"></path>
                    </g>
                    <defs>
                    <clipPath id="clip0_134_34">
                    <rect fill="white" height="38.1" width="80"></rect>
                    </clipPath>
                    </defs>
                    </svg>
                        </button>
                      </div>
                      <div class="separator">
                        <hr class="line" />
                        <p>provide bank details below</p>
                        <hr class="line" />
                      </div>
                      <div class="credit-card-info--form">
                        <div class="input_container">
                          <label for="password_field" class="input_label">Bank name</label>
                          <input id="password_field" class="input_field" type="text" placeholder="Enter Bank name" onChange={(e)=>{
                            setBankName(e.target.value)
                          }} required/>
                        </div>
                        <div class="input_container">
                          <label for="password_field" class="input_label">Account Number</label>
                          <input id="password_field" class="input_field" type="number" placeholder="0000 0000 0000 0000" onChange={(e)=>{
                            setAccountNumber(e.target.value)
                          }} required/>
                        </div>
                        <div class="input_container">
                          <label for="password_field" class="input_label" type='number'> Enter amount</label>
                          <div class="split">
                          <input id="password_field" class="input_field" type="tel"  placeholder="$0.00" onChange={(e)=>{
                            setAccountNumber(parseInt(e.target.value))
                          }} required/>
                          <input id="password_field" class="input_field" type="number" placeholder="Routine Number" />
                        </div>
                        </div>
                      </div>
                      <button class="purchase--btn" onClick={() => {
                        withdraw()
                        }}>withdraw</button>
                    </form>
                    </div>
             </div>
            }
            {
                showCrypto &&
              <section className="checkout-page">
              <div className="page-swiper-wrapper">
              <div className="page-header">
                  <h3>Choose an Option</h3>
                  <h2>withdrawal Methods</h2>
                  <p>Choose a withdrawal method to withdraw money.</p>
              </div>
              <div className="swiper-container">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                  >
                    {
                      withdrawMethods.map((withdrawmethod) => (
                      <SwiperSlide key={withdrawmethod.id} className='my-slide'>
                      <div className="crypto-card-img-container">
                        <img src={withdrawmethod.image} alt="" />
                        <h2>{withdrawmethod.method}</h2>
                      </div>
                      <div className="investrange-container">
                        <div className="investrange-card">
                          <p>limit:</p>
                          <p>{withdrawmethod.min} - {withdrawmethod.max} USD</p>
                        </div>
                        <div className="investrange-card">
                          <p>charge</p>
                          <p>0 USD + 0%</p>
                        </div>
                      </div>
                      <button className="deposit-btn" onClick={()=>{
                        setActiveMethod({
                          id:`${withdrawmethod.id}`,
                          min:`${withdrawmethod.min}`,
                          max:`${withdrawmethod.max}`,
                          image:`${withdrawmethod.image}`,
                          method:`${withdrawmethod.method}`
                        })
                        setShowModal(true)
                      }}>withdraw</button>
                    </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                
              <div className="swiper-container mobile-swiper-container">
                <Swiper
                   pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {
                      withdrawMethods.map((withdrawmethod) => (
                      <SwiperSlide key={withdrawmethod.id} className='my-slide'>
                      <div className="crypto-card-img-container">
                        <img src={withdrawmethod.image} alt="" />
                        <h2>{withdrawmethod.method}</h2>
                      </div>
                      <div className="investrange-container">
                        <div className="investrange-card">
                          <p>limit:</p>
                          <p>{withdrawmethod.min} - {withdrawmethod.max} USD</p>
                        </div>
                        <div className="investrange-card">
                          <p>charge</p>
                          <p>0 USD + 0%</p>
                        </div>
                      </div>
                      <button className="deposit-btn" onClick={()=>{
                        setActiveMethod({
                          id:`${withdrawmethod.id}`,
                          min:`${withdrawmethod.min}`,
                          max:`${withdrawmethod.max}`,
                          image:`${withdrawmethod.image}`,
                          method:`${withdrawmethod.method}`,
                          wallet:`${withdrawmethod.wallet}`
                        })
                        setShowModal(true)
                      }}>withdraw</button>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
              <button className="history-btn" onClick={()=>{
                navigate('/withdrawlogs')
              }}>
                withdrawal history
                <FiArrowRight />
              </button>
            </div>
            </section>
            }
          
      </div>}
      {
        checkoutPage &&
        <WithdrawReview Active={activeMethod} withdrawAmount={withdrawAmount} closepage={close} route={route} />
        }
    </>
  )
}

export default Userdashboardwithdraw