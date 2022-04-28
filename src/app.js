import React from 'react';
import Everything from './components/everything'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App () {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Everything/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;