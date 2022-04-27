import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Companies from './Companies.js'
import Trainer from "./Trainer.js"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>
    </div>
  )
}

export default App