import react from "react"
import React ,{useState} from "react"
import firebase from "../config/Firebase"
import Button from '@material-ui/core/Button';
import "./Login.css";
import TextField from '@material-ui/core/TextField';
const Work=(props)=>{
        const [email,setEmail]= useState("")
        const [password,setPassword]= useState("")
  
  const  SignUp=()=>{
           props.history.push("/Signup")
  }
     const LogIn=()=>{
        if(email != "" && password != "" ){  
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                        alert("congratulation")
                        console.log(user)
                        props.history.push("/About")
                  // Signed in 
                  // .
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  alert("please first signUp")
                });


           
     } 
     else{
              alert("you are not login ")
     }
}       
        return(
                <div className="main">
                     
                       <h1> LOGN IN </h1> <br />
                    <TextField id="standard-basic" className="input"  value={email}    label="Email"  onChange={(e)=> setEmail(e.target.value)} /><br/>
                    <TextField id="standard-basic" className="input"  value={password} label="password"  onChange={(e)=> setPassword(e.target.value)} /><br/> <br/>       
                         <Button className="loginbtn" variant="contained" color="primary" onClick={LogIn}>Login</Button>
                         <Button className="loginbtn" variant="contained" color="primary" onClick={SignUp}>Sign Up</Button>

                 </div>
        
        )
}

export default Work;