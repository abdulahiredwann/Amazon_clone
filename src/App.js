import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure this path is correct
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider/StateProvider';
import { useEffect } from 'react';
import { auth } from './firbase';
import Payment from './Components/Payment/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const promis = loadStripe(
    'pk_test_51PNpYYGFu9J9mlHy2W7EDCHtrEfRIi2RWBRPb8IirO4CWWgHtaA72EzmqfFWdD2pYUrXcbsCdwN0L5QMoU0WdGFO00E1GSHCSg'
);

const App = () => {

    const [{}, dispatch] = useStateValue();
    useEffect(()=>{
        auth.onAuthStateChanged((authUser)=>{
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user:authUser
                })

            }else{
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })
    },[])
    return (
        <Routes>
            <Route path='/checkout' element={
                <div className="app">
                    <Header />
                    <Checkout />
                </div>
            }>

            </Route>
            <Route path='/login' element={
                <div className="app">
                    <Login/>
                </div>
            }>

            </Route>
            <Route path='/payment' element={
                <div className="app">
                    <Header />
                    <Elements stripe={promis}>
                    <Payment/>
                    </Elements>
                </div>
            }>

            </Route>
            <Route path='/' element={
                <div className="app">
                    <Header />
                    <Home />
                </div>}>

            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default App
