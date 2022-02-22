import {useState} from "react"
import { useHistory } from "react-router-dom"
import isEmail from "./isEmail"
export default function LoginForm(props){
    const history = useHistory();
    const [userData, setUserData]= useState({

        email:"",
        password:"",
      
    })

    const [errors,setError] = useState({
        emailError:"",
        passwordError:"",
       
    })
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const submition=(e)=>{
        e.preventDefault()
        history.push('/')

    }

   const changeData= (e)=>{
 
   if(e.target.name === "Email"){
        setUserData({
            ...userData,
            email:e.target.value
        })
        setError({
            ...errors,
            emailError: e.target.value.length === 0 ? "email must be provided" : isEmail(e)? "invalid email" : null
        })
    }else if(e.target.name === "Password"){
        setUserData({
            ...userData,
            password:e.target.value
        })

        setError({
            ...errors,
            passwordError: e.target.value.length === 0 ? "password must be provided" 
            : e.target.value.length < 8? "password must be at least 8 chars."
            : null
        })
    }

    console.log(e.target.value);
    }

    return(
        <>
        <form onSubmit={(e)=>submition(e)} className="container p-5" > 

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    type="email"
     className="form-control" 
     aria-describedby="emailHelp"

     value={userData.email}
     name="Email"
     onChange={(e)=>changeData(e)}
     />
     <p className="text-danger">{errors.emailError}</p>
    <div  className="form-text">We'll never share your email with anyone else.</div>
  </div>

 

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input 
    type={passwordShown ? "text" : "password"} 
    className="form-control" 
   
    
    value={userData.password}
    name="Password"
    onChange={(e)=>changeData(e)}
  
    />
   
    <button class="btn btn-outline-secondary" type="button" onClick={togglePassword}>Show</button>
  
    
    <p className="text-danger">{errors.passwordError}</p>
  </div>

 
              

  
  <button disabled={errors.emailError || errors.passwordError} type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )

}