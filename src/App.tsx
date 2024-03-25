// import React from "react"
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import PageHandler from './PageHandler'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<PageHandler />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
