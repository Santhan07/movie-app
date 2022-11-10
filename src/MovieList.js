import React from "react";
import './App.css';
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from './global';


  function MovieList(){

    const[movieList,setMovieList]=useState([])

    const INTIAL_MOVIE_LIST = [
      {
        name: "RRR",
        poster:
          "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        rating: 8.8,
        summary:
          "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
      },
      {
        name: "Iron man 2",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary:
          "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
      },
      {
        name: "No Country for Old Men",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        rating: 6,
        summary:
          "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
      },
      {
        name: "Jai Bhim",
        poster:
          "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        summary:
          "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        rating: 8.8
      },
      {
        name: "The Avengers",
        rating: 8,
        summary:
          "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        poster:
          "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
      },
      {
        name: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        rating: 7.6,
        summary:
          "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
      },
      {
        name: "Baahubali",
        poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        rating: 8,
        summary:
          "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
      },
      {
        name: "Ratatouille",
        poster:
          "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary:
          "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
      }
    ];
      useEffect(()=>{
      fetch(`${API}/movies`)
      .then((data)=>data.json())
      .then((mvs)=> setMovieList(mvs));
      },[]);


    const[name,setName]=useState("");
    const[rating,setRating]=useState("");
    const[poster,setPoster]=useState("");
    const[summary,setSummary]=useState("");

    

    return(
      <div>
        <div className="add-movie-form">
          <TextField onChange={(event)=>setName(event.target.value)}
          label="Enter movie name" variant="standard"/>
          <TextField onChange={(event)=>setRating(event.target.value)}
          label="Enter movie rating" variant="standard"/>
          <TextField onChange={(event)=>setPoster(event.target.value)}
          label="Enter movie poster" variant="standard"/>
          <TextField onChange={(event)=>setSummary(event.target.value)}
          label="Enter movie summary" variant="standard"/>

          <Button onClick={()=>{
            const newMovie={
              name:name,
              poster:poster,
              rating:rating,
              summary:summary
            };

            setMovieList([...movieList,newMovie])
          }} variant="contained">Add Movie</Button>
        </div>

        <div className="movie-list">
          {movieList.map((mv,index)=>(
            <Movienew key={index} movie={mv} id={index}/>
          ))}
        </div>
      </div>
    )

  }

  function Movienew({movie}){

    const styles={
      color:movie.rating >=8 ? "green":"red"
    }

    const[show,setShow]=useState(true)

    const summaryStyles = {
      display: show ? "block":"none",
    }

    return(
      <div className="movie-container">
      <img className="movie-poster" src={movie.poster} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle description</button>
      <p style={summaryStyles} className="movie-summary">{movie.summary}</p>
    </div>
    )
  }

  export default MovieList;