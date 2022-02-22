import { useHistory , useLocation} from "react-router-dom";
export default function Home(props){
 //console.log(props);
 const history = useHistory()
 const location = useLocation()
// console.log(location);
 //console.log(history);

    return(
        <>
        <h1>welcome from home</h1>
        </>
    )

}