import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="add" element={<AddUser />}></Route>
            <Route path="/edit/:id" element={<EditUser />}></Route>
          </Routes>
        </GlobalProvider>

      </div>
    </BrowserRouter>
  );
}

export default App

