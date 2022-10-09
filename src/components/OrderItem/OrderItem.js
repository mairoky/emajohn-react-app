import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './OrderItem.css';

const OrderItem = ({ product, deleteProductFromCart }) => {
    const { id, name, price, quantity, img } = product;
    return (
        <div className='order-item'>
            <div className="p-img">
                <img src={img} alt="" />
            </div>
            <div className="item-details">
                <div className="item-info">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="item-delete">
                    <button onClick={() => deleteProductFromCart(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;