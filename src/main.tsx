import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './Components/Auth/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={"1089973021762-pfhfv05ommamoravmovurtort0k1rln8.apps.googleusercontent.com"}>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </AuthProvider>
  </GoogleOAuthProvider>
)
