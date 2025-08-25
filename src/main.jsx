
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/poppins/400.css"  // Regular
import "@fontsource/poppins/500.css"  // Medium
import "@fontsource/poppins/600.css"  // Semibold

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
