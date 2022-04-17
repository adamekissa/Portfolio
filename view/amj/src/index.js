import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "../src/Pages/Portfolio/index.js";
import Contact from "../src/Pages/Contact/index.js";
import Hobbies from "../src/Pages/Hobbies/index.js";
import Album from "../src/Pages/Album/index.js"

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="hobbies" element={<Hobbies />} />
      <Route path='album' element={<Album />}/>
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
