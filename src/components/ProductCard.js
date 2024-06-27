import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-details">
                <h2>{product.title}</h2>
                <p>{product.description.substring(0, 100)}...</p>
                <p className="price">${product.price}</p>
                <Link to={`/detail/${product.id}`} className="detail-link">Read more</Link>
            </div>
            <img src={product.thumbnail} alt={product.title} className="product-image" />
        </div>
    );
};

export default ProductCard;
