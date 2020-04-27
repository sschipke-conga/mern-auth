import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
>>>>>>> 4c783b65d405cf54f220567a5c5473d2be2cd073
import './App.css';

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
=======
    <div className="App">
    </div>
>>>>>>> 4c783b65d405cf54f220567a5c5473d2be2cd073
  );
}

export default App;
