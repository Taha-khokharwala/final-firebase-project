import React from 'react'
import SingUp from './components/SingUp';
import SignIn from './components/SingIn';
import HomePage from './components/HomePage';
import UpdateData from './components/UpdateData';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store  , {persistor} from './components/redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element = {<SingUp/>}></Route>
    <Route exact path='/sign-in' element = {<SignIn/>}></Route>
    <Route exact path='Home-page' element = {<HomePage/>}></Route>
    <Route exact path='Update-Page' element = {<UpdateData/>}></Route>
    </Routes>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  )
}

export default App

