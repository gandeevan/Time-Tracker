import './App.css'
import React, { useState } from 'react';

import TimeTracker from './TimeTracker';
import NewCategory from './NewCategory';
import ViewStats from './ViewStats';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<TimeTracker />} />
      <Route exact path="/new-category" element={<NewCategory />} />
      <Route exact path="/view-stats" element={<ViewStats />} />
    </Routes>
  );
}
