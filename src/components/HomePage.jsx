import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import SingUp from './SingUp';

const auth = getAuth(app);

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect((e) => {
    onAuthStateChanged(auth , (user) => {
      if(user) {
        setUser(user);
      }
      else{
        setUser(null)
      }
    });
  },[])

  if (user === null){
    return (
      <div>
      <SingUp/>
      </div>
    )
  }

  const logOut = (e) => {
    e.preventDefault()
    signOut(auth)
    .then(() => alert("Logout Successfully"))
    .then(() => {
      navigate('/')
    })
    .catch((e) => {
      alert(e)
    })
  }
  return(
    <div>
    <p>Hello {user.email}</p>
    <Link to = '/'>
    <button onClick={logOut}>Logout</button>
    </Link>
    </div>
  )
};

export default HomePage;
