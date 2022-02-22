import {useState} from "react"
import isEmail from "./isEmail"
export default function RegisterForm(){
    const [userData, setUserData]= useState({
        name:"",
        email:"",
        username:"",
        password:"",
        confirmPassword:""
    })

    const [errors,setError] = useState({
        nameError:"",
        emailError:"",
        usernameError:"",
        passwordError:"",
        confirmPasswordError:""
    })

   

    const inValidPassword = (e)=>{
        const passwordFormat = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
        if(!e.target.value.match(passwordFormat)){
            return true
        }
    }

   const changeData= (e)=>{
    if(e.target.name ==="Name"){
        setUserData({
            ...userData,
            name:e.target.value
        })

        setError({
            ...errors,
            nameError: e.target.value.length === 0 ? "name must be provided" : null
        })

    }else if(e.target.name === "Email"){
        setUserData({
            ...userData,
            email:e.target.value
        })
        setError({
            ...errors,
            emailError: e.target.value.length === 0 ? "email must be provided" 
            : isEmail(e)? "invalid email" 
            : null
        })

       
    }else if(e.target.name === "Username"){
        setUserData({
            ...userData,
            username:e.target.value
        })

        setError({
            ...errors,
            usernameError: e.target.value.length === 0 ? "username must be provided" 
            : e.target.value.includes(" ")? "username musn't contains space" 
            : null
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
            : inValidPassword(e)? "invalid password format"
            : null
        })
    }else if(e.target.name === "Confirmpassword"){
        
        setUserData({
            ...userData,
            confirmPassword:e.target.value
        })

        setError({
            ...errors,
            confirmPasswordError:e.target.value.length === 0? "confirm password must be provided"
            :e.target.value !== userData.password ? "password must be the same"
            :null
        })
    }

    console.log(e.target.value);
    }

    return(
        <>
        <form className="container p-5"> 

        <div className="mb-3" >
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input 
    type="text" 
    className="form-control" 
    id="exampleInputName1" 
    aria-describedby="nameHelp"

    value={userData.name}
    name="Name"
    onChange={(e)=>changeData(e)}
    />
   
    <p className="text-danger">{errors.nameError}</p>

  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    type="email"
     className="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp"

     value={userData.email}
     name="Email"
     onChange={(e)=>changeData(e)}
     />
     <p className="text-danger">{errors.emailError}</p>
    <div  className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputUserName2" 
    aria-describedby="nameHelp"
    
    value={userData.username}
    name="Username"
    onChange={(e)=>changeData(e)}
    />
    <p className="text-danger">{errors.usernameError}</p>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input 
    type="password" 
    className="form-control" 
    
    
    value={userData.password}
    name="Password"
    onChange={(e)=>changeData(e)}
    />
    <p className="text-danger">{errors.passwordError}</p>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm password</label>
    <input 
    type="password" 
    className="form-control" 
   
    
    value={userData.confirmPassword}
    name="Confirmpassword"
    onChange={(e)=>changeData(e)}
    />
    <p className="text-danger">{errors.confirmPasswordError}</p>
  </div>
  
  <button 
  type="submit"
  disabled={errors.nameError || errors.emailError || errors.usernameError || errors.passwordError || errors.confirmPasswordError} 
  className="btn btn-primary">Submit</button>
</form>
        </>
    )

}