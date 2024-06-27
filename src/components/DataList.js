import React from 'react';
import ProductCard from './ProductCard';
import './DataList.css';

const DataList = ({ products }) => {
    return (
        <div className="data-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default DataList;
