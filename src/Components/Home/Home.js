import React from 'react'
import homebanner from '../../img/home.jpg'
import './Home.css'
import Product from '../Product/Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src={homebanner}
          alt='banner' />
        <div className='home__row'>
          <Product
            id="12"
            title="SAMSUNG Galaxy S24+ Plus Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version 2024, Amber Yellow"
            price = {12000}
            rating = {5}
            img ="https://m.media-amazon.com/images/I/71yc5A1EavL._AC_SL1500_.jpg"
          />
          <Product id="12"
            title="SAMSUNG Galaxy S24+ Plus Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version 2024, Amber Yellow"
            price = {12000}
            rating = {5}
            img ="https://m.media-amazon.com/images/I/618zZ7u3sUL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
        </div>
        <div className='home__row'>
          <Product id="12"
            title="SAMSUNG Galaxy S24+ Plus Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version 2024, Amber Yellow"
            price = {12000}
            rating = {5}
            img ="https://m.media-amazon.com/images/I/8189uwDnMkL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
          <Product id="12"
            title="SAMSUNG Galaxy S24+ Plus Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version 2024, Amber Yellow"
            price = {12000}
            rating = {5}
            img ="https://m.media-amazon.com/images/I/6177U5fDSwL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
          <Product id="12"
            title="SAMSUNG Galaxy S24+ Plus Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version 2024, Amber Yellow"
            price = {12000}
            rating = {5}
            img ="https://m.media-amazon.com/images/I/61HyJYD+TeS._AC_SY300_SX300_.jpg"/>
        </div>
        <div className='home__row'>
          <Product id="12"
            title="SAMSUNG Galaxy S24+ Plus Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version 2024, Amber Yellow"
            price = {12000}
            rating = {5}
            img ="https://m.media-amazon.com/images/I/71rKFhZB+0L._AC_SX425_.jpg" />
        </div>
      </div>

    </div>
  )
}

export default Home