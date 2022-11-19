import './App.css';
import IntroText from './IntroText'
import React, { useState} from 'react';
import logo from './logo.jpg';
import Notify from './Notify'
import Buttone from './Buttone'
import avatar from './Retink-avatar.png';
import Explainer from './Explainer'
import Grid1 from './Grid1'
import Tranact from './Tranact'
import Grid2 from './Grid2'
import Signup from './Signup'


function App() {
    const [business, businessname] = useState([])
    return (
        <>
        <img id='logotop' src={require('./logo.jpg')} />
        <IntroText />
        <Notify />
        <Buttone />
        <img id='avatar'  src={avatar}  alt="logo"/>
        <Explainer />
        <Grid1 />
        <Tranact />
        <Grid2 />
        <Signup />
        </>
    )
}

export default App;