import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './App.css';

import React from 'react'

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NoPage />} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

