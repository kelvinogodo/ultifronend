import './App.css';
import { Profiler, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';
import Signup from './pages/Signup';
import Userdashboard from './pages/Userdashboard'
import Userdashboardfundaccount from './components/userdashboardfundaccount/Userdashboardfundaccount'
import Userdashboardwithdraw from './components/userdashboardwithdraw/Userdashboardwithdraw';
import Userdashboardreferrals from './components/userdashboardreferrals/Userdashboardreferrals';
import Userdashboardplans from './components/userdashboardplans/Userdashboardplans';
import Userdashboardtransactions from './components/userdashboardtransactions/Userdashboardtransactions';
import Investments from './components/invesments/Investments';
import Profile from './components/profile/Profile'
import VerifyEmail from './pages/VerifyEmail';
import WithdrawalLogs from './components/WithdrawalLogs';
import Checkout from './components/Checkout';
import Admindashboard from './components/admindashboard/Admindashboard';
import Deposit from './components/deposit/Deposit';
import Aboutpage from './pages/Aboutpage';
import Faq from './pages/Faq';
import Buybitcoin from './pages/Buybitcoin';
import Policy from './pages/Policy';
import Viplan from './components/viplan/Viplan';
function App() {

    useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100
    })
      AOS.refresh()
    // duration=1200;
    }, [])

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
  
    const route = 'https://ultibackend.onrender.com'
  return (
    <>
    <AnimatePresence>
        <Router>
        <motion.div className="App"
        key={Routes.Route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration:0.2}}
        variants={{
          initialState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState:{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }
        }}
        >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login route={route} />}/>
            <Route path='/signup' element={<Signup route={route}/>}/>
            <Route path='/dashboard' element={<Userdashboard route={route}/>}/>
            <Route path='/fundwallet' element={<Userdashboardfundaccount route={ route}/>}/>
            <Route path='/referrals' element={<Userdashboardreferrals route={ route}/>}/>
            <Route path='/withdraw' element={<Userdashboardwithdraw route={ route}/>}/>
            <Route path='/plans' element={<Userdashboardplans route={route}/>}/>
            <Route path='/transactions' element={<Userdashboardtransactions route={ route}/>}/>
            <Route path='/investments' element={<Investments route={ route}/>}/>
            <Route path='/myprofile' element={<Profile route={route}/>}/>
            <Route path='/user/:id' element={<VerifyEmail route={route}/>}/>
            <Route path='/withdrawlogs' element={<WithdrawalLogs route={ route}/>}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/admin' element={<Admindashboard route={ route}/>}/>
            <Route path='/deposit' element={<Deposit />}/>
            <Route path='/promoplan' element={<Viplan route={route}/>}/>
          </Routes>
        </motion.div>
      </Router>
    </AnimatePresence>
    </>
  );
}

export default App;