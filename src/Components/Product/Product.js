import React from 'react';
import './Product.css';
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, price, rating, img }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <p key={index}>⭐</p>
                        ))}
                </div>
            </div>
            <img className='im' src={img} alt='as' />
            <button onClick={addToBasket} className='product__button'>Add to Basket</button>
        </div>
    );
}

export default Product;
