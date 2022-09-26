import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, price, seller, ratings } = product;
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt={name} />
            </div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <h4 className="product-price">Price: ${price}</h4>
                <p className="product-seller"><small>Manufacturer: {seller}</small></p>
                <p className="product-rating"><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="add-cart-btn">
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;