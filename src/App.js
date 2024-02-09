import SingUp from './components/SingUp';
import SignIn from './components/SingIn';
import HomePage from './components/HomePage';
import { Routes, Route, BrowserRouter } from "react-router-dom";


import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element = {<SingUp/>}></Route>
    <Route exact path='/sign-in' element = {<SignIn/>}></Route>
    <Route exact path='Home-page' element = {<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

