import axios from "axios"
import { useEffect, useState } from "react"
//import './movieCard.css'
import Card from "./Card"
export default function MovieList(props){

    const [movies , setMovies] = useState([])  //return array

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
            {movies.map((movie)=>{
                return(
                   
                    <Card key={movie.id}
                    title = {movie.title} 
                    photo ={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    ID={movie.id}
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