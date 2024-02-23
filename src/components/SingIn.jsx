import React, { Fragment, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.emailVerified) {
          alert("sign in Successfully")
          navigate('/Home-page');
        } else {
          alert('Email not verifie');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form>
      <Fragment>
        <label>Email : </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your Email..."
          required
        />
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your Password..."
          required
        />
        <br></br>
        <br></br>
        <button onClick={signInUser} type="Submit">
          Sign In
        </button>
      </Fragment>
      <p>
        Don't have an account? <Link to="/">Sign up</Link>
      </p>
    </form>
  );
};

export default SignIn;
