import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className='container'>        
        <Routes>            
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:imdbID' element={<MovieDetail/>} />
         <Route element={<PageNotFound/>} />
        </Routes>  
        </div>     
        <Footer />
      </Router>
       
    </div>
  );
}

export default App;
