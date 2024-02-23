import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {updateUserData} from './redux/slice'

const UpdatePage = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');


  const handelChange = () => {
    dispatch(updateUserData({ id: name, age, phone }));
    alert('Successfully Updated.');
  };

  return (
    <form>
    <table border={2}>
    <tbody>
    <h1>Update Data Page</h1>
    <tr><td>
    <label>Name : </label>
    <input
    onChange={(e) => setName(e.target.value)}
    type='text'
    placeholder='Enter your new name'>
    </input>
    </td></tr>
    <tr><td>
    <label>Age : </label>
    <input 
    onChange={(e) => setAge(e.target.value)}
    type='number'
    placeholder='Enter your new age'>
    </input>
    </td></tr>
    <td><tr>
    <label>Phone No. : </label>
    <input
    onChange={(e) => setPhone(e.target.value)}
    type='number'
    placeholder='Enter your new number'>
    </input>
    </tr></td>
    <tr><td>
    <label>Change Image : </label>
  <input
  type='file'
  accept='image/*'>
  </input>
  </td></tr>
    <Link to = '/Home-page' >
    <button onClick={handelChange}>Submit</button>
    </Link>
    <Fragment>
    </Fragment>
    </tbody>
    </table>
    </form>
  );
};

export default UpdatePage;






