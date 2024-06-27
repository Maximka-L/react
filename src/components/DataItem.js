import React from 'react';
import './DataItem.css';

const DataItem = ({ product }) => {
    return (
        <div className="data-item">
            <img src={product.thumbnail} alt={product.title} className="data-item-image" />
            <div className="data-item-details">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p className="price">${product.price}</p>
            </div>
        </div>
    );
};

export default DataItem;
