import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataList from '../components/DataList';
import './ListPage.css';

const ListPage = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [modelFilter, setModelFilter] = useState('');

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/smartphones')
            .then(response => setProducts(response.data.products))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(filter.toLowerCase()) &&
        product.title.toLowerCase().includes(modelFilter.toLowerCase()) &&
        (minPrice === '' || product.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || product.price <= parseFloat(maxPrice))
    );

    return (
        <div className="list-page">
            <h1>Smartphones</h1>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="search-input"
                />
                <input
                    type="text"
                    placeholder="Filter by model..."
                    value={modelFilter}
                    onChange={(e) => setModelFilter(e.target.value)}
                    className="search-input"
                />
                <input
                    type="number"
                    placeholder="Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="price-input"
                />
                <input
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="price-input"
                />
            </div>
            <DataList products={filteredProducts} />
        </div>
    );
};

export default ListPage;
