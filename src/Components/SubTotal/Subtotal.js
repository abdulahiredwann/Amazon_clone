import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './subtotal.css'
import { useStateValue } from '../StateProvider/StateProvider';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const getBasketTotal = (basket) => {
        const total = basket?.reduce((amount, item) => item.price + amount, 0);
        console.log('Basket Total:', total); // Log the total for debugging
        return total;
    };
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} item): <strong>{value}</strong>
                        </p>
                        <small>
                            <input type='checkbox' />This order contain a gif
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}

            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal