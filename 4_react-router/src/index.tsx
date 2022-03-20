import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routers/HomePage";
import AboutPage from "./routers/AboutPage";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);