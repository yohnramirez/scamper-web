import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" component={Home} exact /> 

      </Routes>
      <Home/>
    </Router>
  )
}

export default App;