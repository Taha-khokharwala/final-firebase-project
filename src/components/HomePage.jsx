import React, { Fragment, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingUp from './SingUp';
import { selectUserData } from './redux/slice';

const auth = getAuth(app);

const HomePage = () => {  
  const [user, setUser] = useState(null);
  const userData = useSelector(selectUserData);
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
  }
  return(
    <Fragment>
    <form>
    <table border={1}>
    <tbody>
    <tr> <td>
    Name : {userData.name} </td>
    </tr>
    <tr><td>Age : {userData.age} </td></tr>
    <tr><td>Phone Number : {userData.phone} </td></tr>
    <tr><td>Email : {user.email} </td></tr>
    <tr><td>Image : {userData && <img src={userData.imageUrl} alt="img" style={{ width: '500px', height: 'auto' }} />}</td></tr>
    </tbody>
    </table>
    </form>
    <Link to = '/'>
    <button onClick={logOut}>Logout</button>
    </Link>
    <Link to = '/Update-Page'>
    <button>Update</button>
    </Link>
    </Fragment>
  )
};

export default HomePage;
