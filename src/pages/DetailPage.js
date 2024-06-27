import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DataItem from '../components/DataItem';
import './DetailPage.css';

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="detail-page">
            <DataItem product={product} />
        </div>
    );
};

export default DetailPage;
