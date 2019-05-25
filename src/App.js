import React from 'react';

import Home from './Home'

import Welcome from './Welcome'

import Login from './Login'

import Meetings from './Meetings'

import Register from './Register'

import Navigation from './Navigation'

import {Router} from '@reach/router'

import firebase from './Firebase'

import dotenv from 'dotenv'
dotenv.config()

const { a } = require('./config')

class App extends React.Component{
  
  constructor(){
    super()
  this.state={
    
    user:null
  }
    
  }
  
  componentDidMount(){
    const ref= firebase.database().ref('user')
    ref.on('value',snapshot=>{
      let FBuser=snapshot.val()
      this.setState({user:FBuser})
      
    })
    
  }
  render(){
  return (
    <div>
    <Navigation user={this.state.user}/>
    {this.state.user && <Welcome user={this.state.user}/> }
   <Router>
   <Home path='/' user={this.state.user}/>
   <Login path='/login' />
   <Meetings path='/meetings' />
   <Register path='/register' />
   </Router>
  </div>
  );
  }
}
export default App;
