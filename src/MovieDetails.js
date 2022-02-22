import axios from "axios"
import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
export default function MovieDetails(props){
 
    const params = useParams()

    const [movieDetails , setMovieDetails] = useState({})
   
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8ae9e3668be414a31d60fca4d9a57618`)
        .then((res)=>{
            console.log(res.data);
            console.log(res.data.id);
            
            setMovieDetails(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    return(

        

        <div class="card" style={{width: "18 rem"}}>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{movieDetails.title}</h5>
          <p class="card-text">{movieDetails.overview}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Status: {movieDetails.status}</li>
          <li class="list-group-item">Original language: {movieDetails.original_language}</li>
          <li class="list-group-item">Original title: {movieDetails.original_title}</li>
        </ul>
        
      </div>
       
    )
}