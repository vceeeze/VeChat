import React from 'react';
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

function App() {
  

  return (
    <>
    
       
      {/* Show the sign-in and sign-up buttons when the user is signed out */}
      
      <SignedOut >
        <SignInButton mode='modal'/>
      </SignedOut>
      {/* Show the user button when the user is signed in */}
      <SignedIn>
        <UserButton />
      </SignedIn>

    </>
  )
}

export default App
