import React from 'react';
import { Routes , Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/index"
import SignUp from './components/SignUp/index';
import Todo from './components/Todo';


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="todo" element={<Todo/>}/>
      </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
