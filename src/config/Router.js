import React from "react"
import { BrowserRouter as Router,
      Route

} from "react-router-dom"
import Home from '../components/Home'
import About from '../components/About'
import  SignUp from '../components/Signup.jsx'
import Login from '../components/Login'
import Component from "react"

const Navigation=()=>{
     return(   
             <Router>
             <Route  exact  path="/"  component={Home}  />
             <Route  exact  path="/About"  component={About}  />
             <Route  exact  path="/Login"  component={Login}  />
             <Route  exact  path="/signup"  component={SignUp}/> 

             
               </Router> )
}
export default Navigation;