import React from 'react'
//Comment satiri

/**
 * Comment blogu
 */

const Jsx3 = () => {

const isAdmin = true;

  return (
    <div>
    {/* commentler bu alanda bu sekilde yazlir */}

    {
        isAdmin ?
           (<div>
           <h2>Admin Menu</h2>
            <ul>
                <li>Create User</li>
                <li>Update User</li>
                <li>Delete User</li>
            </ul>
           </div>)
                :
             (<div>
             <h2>User Menu</h2>
            <ul>
                <li>Login</li>
                <li>Register</li>
            </ul>
             </div>)
    }
        

        
    </div>
  )
}

export default Jsx3