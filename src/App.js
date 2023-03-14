import React from 'react';
import HomePage from "./components/pages/HomePage.js"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
