import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import process from "process";
import { BrowserRouter as Router } from "react-router-dom";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </Router>
  </React.StrictMode>
)