const INITIAL_VALUE ={
    
    favList: []
}
export default function starReducer (state= INITIAL_VALUE, action){

    switch(action.type){
        case "STAR_MOVIE" :
            return{
                ...state,
               favList: action.payload
            }

    default:
        return state 
    }
}