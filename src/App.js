import React from 'react';

import Home from './components/Home'

import Welcome from './components/Welcome'

import Login from './components/Login'

import Meetings from './components/Meetings'

import Register from './components/Register'

import Navigation from './components/Navigation'

import {Router,navigate} from '@reach/router'

import firebase from './Firebase'

import dotenv from 'dotenv'
dotenv.config()

class App extends React.Component{
  
  constructor(){
    super()
  this.state={
    
    user:null,
    dispalyName:null,
    userID:null
  }
    
  }
  
  componentDidMount(){
    firebase.auth().onAuthStateChanged(FBuser=>{
      if(FBuser){
        this.setState({
          user:FBuser,
          dispalyName:FBuser.displayName,
          userID:FBuser.uid
        })
      }
    })
  }

  logoutUser=e=>{
    e.preventDefault()
    this.setState({
      userID:null,
      user:null,
      dispalyName:null
    })
    firebase.auth().signOut().then(()=>
    {
      navigate('/login')
    })
  }


  registerUser=(userName)=>{
    console.log(this)
    firebase.auth().onAuthStateChanged( FBuser=>{
      console.log(FBuser)
      FBuser.updateProfile({dispalyName:userName})
      .then(()=>{
        console.log('after setting displayname:'+FBuser.displayName)
        this.setState({
          user:FBuser,
          dispalyName:FBuser.displayName,
          userID:FBuser.uid
        })
        navigate('/meetings')
      })
    } )

  }
  

  render(){
  return (
    <div>
    <Navigation user={this.state.user} logoutUser={this.logoutUser}/>
    {this.state.user && <Welcome userName={this.state.dispalyName}  logoutUser={this.logoutUser}/> }
   <Router>
   <Home path='/' user={this.state.user}/>
   <Login path='/login' />
   <Meetings path='/meetings' />
   <Register path='/register' registerUser={this.registerUser} />
   </Router>
  </div>
  );
  }
}

export default App;
