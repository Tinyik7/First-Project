import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
