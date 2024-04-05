import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
//import RoomSched from "./roomSched.tsx";
import RoomSchedNonMUI from "./roomSchedNonMUI.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoomSchedNonMUI/>
  </React.StrictMode>,
)
