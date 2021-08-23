import React from 'react'
import { useState, useEffect } from "react";
import Axios from 'axios'
import './App.css';

function App() {
  const [movieName, setMovieName] = useState('');
  const [movieReview, setReview] = useState('')
  const [movieRevList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response.data)
    })
  }, []))
  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      
      movieName: movieName,
      movieReview: movieReview,
    }).then(() => {
      alert("sucessful insert");
    });
  };

  return (
    <div className="App">
      <h1> CRUD Application</h1>
      <h3> Movie Reviews </h3>
      <div className='form'>
        <label> Movie Name </label>
        <input type="text" name="movie" onChange={(e) => { setMovieName(e.target.value) }} />
        <label> Review </label>
        <input type="text" name="review" onChange={(e) => { setReview(e.target.value) }} />
        


        <button type='submit' onClick={submitReview} >Submit </button>
      
      {movieRevList.map((val)=>{ 
        return <h1>Movie Name: val.movieName  |Movie Review: {val.movieRev}</h1>
      })}
      </div>
    </div>
  );
}

export default App;
