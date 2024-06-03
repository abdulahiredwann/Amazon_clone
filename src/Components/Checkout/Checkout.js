import React from 'react'
import '../Checkout/checkou.css'
import Subtotal from '../SubTotal/Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider/StateProvider'
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://interviewquery-assets.s3-us-west-1.amazonaws.com/images/Amazon_Banner.png'
          alt='add'
        />
        <h3>Hellow</h3>
        <h2 className='checkout__title'>YOur shopping</h2>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
        ))}



      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout