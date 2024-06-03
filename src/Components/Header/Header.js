import React from 'react';
import navlogo from '../../img/am.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Heade.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firbase';

function Header() {
    const [{ basket ,user}, dispatch] = useStateValue();
    const handelAuthentication = ()=>{
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src={navlogo} alt='check' />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handelAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>Hello {!user?'Guest':user.email}</span>

                        <span className='header__optionLineTwo'>{!user?'Sign IN':'Sign Out'}</span>

                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <div className='header__optionBasket'>
                    <Link to="/checkout">
                        <ShoppingBasketIcon />
                    </Link>
                    <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>

                </div>
            </div>
        </div>
    );
}

export default Header;
