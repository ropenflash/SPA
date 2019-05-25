import React from 'react'
import {navigate} from '@reach/router'
import firebase from 'firebase'
import FormError from './FormError'
class Login extends React.Component {
    constructor(){
      super()
      this.state={
        email:'',
        password:'',
        errorMessage:null

    }
  }

logIn=e=>{
const {email,password}=this.state
  

  e.preventDefault()
firebase.auth()
.signInWithEmailAndPassword(email.trim(),password)
.then(()=>{
  navigate('/meetings')
}).catch(error=>{
  if(error.message!==null){
      this.setState({errorMessage:error.message})
  }
  else{
      this.setState({errorMessage:null})
  }
  

})

}

handleChange=e=>{
const name=e.target.name
const value=e.target.value
this.setState({[name]:value})
}

    render(){
        
        
    
        
        
        return(
          <form className="mt-3" onSubmit={this.logIn}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card bg-light">
          <div className="card-body">
            <h3 className="font-weight-light mb-3">Log in</h3>
            <section className="form-group">
            {this.state.errorMessage!==null?(<FormError theMessage={this.state.errorMessage}/>):null}
              <label
                className="form-control-label sr-only"
                htmlFor="Email">
                Email
              </label>
              <input
                required
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </section>
            <section className="form-group">
              <input
                required
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </section>
            <div className="form-group text-right mb-0">
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
            )
        
        
        
    }
    
}


export default Login