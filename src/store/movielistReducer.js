const INITIAL_VALUE ={
    
    mList: []
}
export default function movieslistReducer (state= INITIAL_VALUE, action){

    switch(action.type){
        case "MOVIES" :
            return{
                ...state,
               mList: action.payload
            }

    default:
        return state 
    }
}