import React from 'react'
import {Link} from '@reach/router'
class Welcome extends React.Component {
    
    
    render(){
        
        
    const {userName,logoutUser}=this.props
        
        
        return(
            <div className="text-center mt-4">
            <span className="test-secondary font-weight-bold pl-1">
            Welcome {userName}
            </span>
            
            <Link to="/"className='font-weight-bold text-primary pl-1'onClick={e=>logoutUser(e)}> log out</Link>        </div>
            )
        
        
   
    }
    
}


export default Welcome