import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-fqkf02au3yijp8dt.us.auth0.com"
    clientId="5FCmjIwxar1fFSaEUPTNkeCRxTASOwqT"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
)
