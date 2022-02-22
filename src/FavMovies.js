import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"
import { useSelector } from "react-redux";




export default function FavMovies(){

    const [movies, setMovies] = useState([]);
  const favMovies = useSelector((state) => {
    return state.star.favList;  //favList
  });

  
  //const dispatch = useDispatch();
  const filterMovies = movies.filter((m) => {
    return favMovies.includes(m.id);
  });
  console.log(favMovies);

   // const [movies, setMovies] = useState([]);
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8ae9e3668be414a31d60fca4d9a57618")
        .then((res)=>{
            //console.log(res.data);
            //console.log(res.data.results);
            console.log(res.data.results);
            
            setMovies(res.data.results) //array 
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <>
    

        <div className="container mt-5 p-5">
        <div className="row">
            {filterMovies.map((movie)=>{
                return(
                   
                    <Card key={movie.id}
                    title = {movie.title} 
                    photo ={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    id={movie.id}
                    ></Card>

                   
                )
            })}
            
        </div>


        </div>
        
        {  /*

            {movies.map((movie) =>{
                return(

                 
     <div className="container">
        <div className="row">

            <figure>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
            </figure>
            
            <p>{movie.title}</p>
            <p>{movie.overview}</p>

        
        </div>
        </div>

        
                        
                        
                )

            })}
           
        
        */}

        

        </>
    )

}