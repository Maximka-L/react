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
    const [models, setModels] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/search?q=phone')
            .then(response => {
                setProducts(response.data.products);
                const uniqueModels = [...new Set(response.data.products.map(product => product.title))];
                setModels(uniqueModels);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(filter.toLowerCase()) &&
        (modelFilter === '' || product.title === modelFilter) &&
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
                <select
                    value={modelFilter}
                    onChange={(e) => setModelFilter(e.target.value)}
                    className="model-select"
                >
                    <option value="">All Models</option>
                    {models.map((model, index) => (
                        <option key={index} value={model}>{model}</option>
                    ))}
                </select>
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
                <button className="btn">Apply Filters</button>
            </div>
            <DataList products={filteredProducts} />
        </div>
    );
};

export default ListPage;
