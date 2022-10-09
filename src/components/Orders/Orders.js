import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';

const Orders = () => {

    const { saveCart } = useLoaderData();
    const [cart, setCart] = useState(saveCart);

    const deleteProductFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    // clear data from cart & local storage
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="shop">
            <div className="orders-container">
                {
                    cart.map(product => <OrderItem
                        key={product.id}
                        product={product}
                        deleteProductFromCart={deleteProductFromCart}
                    ></OrderItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;