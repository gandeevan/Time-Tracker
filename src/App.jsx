import './App.css'
import React, { useState } from 'react';

import TimeTracker from './TimeTracker';
import NewCategory from './NewCategory';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  const [categoryOptions, setCategoryOptions] = useState([]);
  return (
    <Routes>
      <Route exact path="/" element={<TimeTracker categoryOptions={categoryOptions} />} />
      <Route exact path="/new-category" element={<NewCategory setCategoryOptions={setCategoryOptions} />} />
    </Routes>
  );
}
