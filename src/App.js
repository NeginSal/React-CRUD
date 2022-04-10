import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="add" element={<AddUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

