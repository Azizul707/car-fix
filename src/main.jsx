import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import CreateRouter from './Routes/Router'
import AuthProvider from './AuthProvider'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={ CreateRouter }></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
