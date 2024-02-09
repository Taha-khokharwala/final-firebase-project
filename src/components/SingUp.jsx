import React, { Fragment ,  useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from './firebase';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const storage = getStorage(app);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return sendEmailVerification(user);
      })
      .then(() => {
        if (image) {
          const storageRef = ref(storage, `images/${image.name}`);
          uploadBytes(storageRef, image).then(() => {
              alert('Send a verification mail to your email');
              localStorage.setItem('Name', name);
              localStorage.setItem('Email', email);
              localStorage.setItem('Password', password);
          });
        } else {
          console.log("Error")
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // useEffect(() => {
  //   auth.onAuthStateChanged((userCredential) => {
  //     console.log(userCredential)
  //   })
  // })

  return (
    <form>
      <Fragment>
        <label> Name : </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter your name..."
          required
        ></input><br></br><br></br>
        <label>Age : </label>
        <input onChange={(e) => setAge(e.target.value)}
        value={age}
        type='number'
        placeholder='Enter your age...'
        required/>
        <br></br>
        <br></br>
        <label>Phone No. : </label>
        <input onChange={(e) => setPhone(e.target.value)}
        value={phone}
        type='number'
        placeholder='Enter your number...'
        required/>
        <br></br>
        <br></br>
        <label>Email : </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your Email..."
          required
        ></input>
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your Password..."
          required
        ></input>
        <br></br>
        <br></br>
        <label>Upload Image : </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <br></br>
        <br></br>

        <button onClick={createUser} type="Submit">
          Sign Up
        </button>
      </Fragment>
      <p>
        If you have an account, then click on <Link to="/sign-in">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUp;