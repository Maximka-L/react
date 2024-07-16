import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p className="price">${product.price}</p>
                <Link to={`/detail/${product.id}`} className="detail-link">Подробнее</Link>
            </div>
        </div>
    );
};

export default ProductCard;
