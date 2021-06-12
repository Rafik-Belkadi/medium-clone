import './App.css';
import { Component, useState } from 'react'
import NavBar from './components/NavBar'
import MiddleEarth from './components/MiddleEarth';
import Article from './components/Articles';
function App(props) {

  return <div className="">
    <NavBar></NavBar>
    <MiddleEarth></MiddleEarth>
    <div className="articles-wrapper">

      {
        [1, 2, 3, 4, 5, 6].map(e => <Article />)
      }
    </div>

  </div>

}


export default App;










