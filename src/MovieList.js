
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
//import './movieCard.css'
import getMoviesList  from './store/movielistAction'
import Card from "./Card"


export default function MovieList(props){

    //const [movies , setMovies] = useState([])  //return array
    const movies =  useSelector((state)=>{return state.moviesList.mList})

    const dispatch = useDispatch()

    useEffect(()=>{

       dispatch(getMoviesList())
        console.log("hii");
    },[])
     
     console.log(movies);

    return(
        <>
      
      

        <div className="container mt-5 p-5">
        <div className="row">
            {movies.map((movie)=>{
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
        */
        
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