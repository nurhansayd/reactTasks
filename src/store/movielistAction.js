
import axios from "axios";


  const getMoviesList =()=>(dispatch)=>{

    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8ae9e3668be414a31d60fca4d9a57618")
    .then((res)=>{
        console.log(res.data.results);
        dispatch({
            type: "MOVIES",
            payload: res.data.results
        })
        
    })
    .catch((err)=>{
        console.log(err);
    })

}


export default getMoviesList;