import { Link } from "react-router-dom";
import {AiOutlineStar , AiFillStar} from "react-icons/ai"

import {useSelector , useDispatch} from "react-redux"
import { starAction } from "./store/starAction";
export default function Card(props){

  const favMovies = useSelector((state) => {
    return state.favList;
  });
  const dispatch = useDispatch();

  const handleFav = (id) => {
    if (favMovies.includes(id)) {
      const index = favMovies.indexOf(id);
      console.log(index);
      favMovies.splice(index, 1);
      dispatch(starAction([...favMovies]));
    } else {
      dispatch(starAction([id, ...favMovies]));
    }
  };


  //const dispatch = useDispatch();
 
  
  
  
    return(
        <>
        <div class="card p-3 m-3" style={{width: "18rem"}}>
  <img src={props.photo} class="card-img-top" alt="..."/>
 
  <div class="card-body">
 
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={`/moviedetails/${props.ID}`}><button class="btn btn-primary">Details</button> </Link>


    {favMovies.includes(props.ID) ? (
                      <AiFillStar
                        className="text-warning float-end fs-3"
                        onClick={() => {
                          handleFav(props.ID);
                        }}
                      />
                    ) : (
                      <AiOutlineStar
                        className="text-warning float-end fs-3"
                        onClick={() => {
                          handleFav(props.ID);
                        }}
                      />
                    )}
  </div>
</div>
        
        </>
    )
}