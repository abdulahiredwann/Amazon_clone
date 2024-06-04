import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct'
import './Payment.css'
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__addres'>
                        <p>{user?.email}</p>
                        <p>123 Street</p>
                        <p>Chicago</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__item'>
                        {basket.map((item)=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                            <div className='payment__title'>
                                <h3>Payment Method</h3>

                            </div>
                </div>
            </div>
        </div>
    )
}

export default Payment