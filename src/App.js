import React from 'react'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Home/>
      <AddUser/>
      <EditUser/>

    </div>
  );
}

export default App

