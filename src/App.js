import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ListPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </Router>
    );
};

export default App;
