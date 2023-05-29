import React, { createContext, useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Errorpage from './Components/Errorpage';
import Signout from './Components/Signout';
import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{state, dispatch}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/signout" element={<Signout />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
