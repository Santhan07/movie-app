import './App.css';
import React from "react";
import MovieList from './MovieList';
import AddColor from './AddColor';
import { Routes, Route, Link } from "react-router-dom";
import Msg from './Msg';
import { BasicForm } from "./BasicForm";

function App() {
  console.log("movie")
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>            
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color-game</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/basic-form">Basic Form</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<Msg />} />
        <Route path="/basic-form" element={<BasicForm  />} />
      </Routes>
      
    </div>
  );
}


function Home() {
  return (
    <h1>Welcome to the Movie app 😊🎇🎇✨🎉🎉</h1>
  )
}
export default App;