import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './store/store.ts' //encapsulate the html with data from store
import {Provider} from "react-redux" // provides the state data to the entire applicatipn
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
