
import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
        <h2> REGISTER, SIGNIN AND SIGNUP using Auth0 </h2>

        {
            isAuthenticated ? (
                <div>
                  <img src={user.picture} alt={user.name} />
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <button onClick={() => logout({ returnTo: window.location.origin })}> Log Out </button>
                </div>
                
              ) : <button onClick={() => loginWithRedirect()} type='submit'> Log In </button>
        }

        {/* {
            isAuthenticated ? <button onClick={() => loginWithRedirect()} type='submit'> Log In </button>
            : <button onClick={() => logout({ returnTo: window.location.origin })}> Log Out </button>
        } */}
        
        
    </>
            
  )
}
export default Login
