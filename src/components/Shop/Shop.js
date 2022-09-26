import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // Event handle for product cart button
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <div className="cart-details">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $1140</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                    <h3>Grand Total: $1559</h3>
                </div>
                <button>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                </button>
                <button>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Shop;