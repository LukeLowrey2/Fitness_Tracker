import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Activities from './Activities';
import Routines from './Routines'
import SignUpForm from './SignUp'
import LoginForm from './Login'
import UserRoutines from './UserRoutines'
import NewActivityForm from './NewActivityForm';
import Logout from './Logout'

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';


const App = () => {
    console.log('Hello from Fitness Tracker');

    return (
        <div>
            <div className="header">
                <div className="right-header">
                <h2>Fitness Trackr</h2>
                </div>
                    

                    <div className="left-header">
                        <div className="left-header-content">
                        <Link to="/SignUpForm">SignUp</Link>
                        </div>
                        <br></br>
                        <div className="left-header-content">
                        <Link to="/LoginForm">Login</Link>
                        </div>
                    </div>
            </div>
            <br></br>
            <div className="main">
                <div className="navbar">
                    <div className="header-links">
                        <Link to="/">Home</Link>
                    </div>


                    <div className="header-links">
                        <Link to="/UserRoutines">User Routines</Link>
                    </div>

                    <div className="header-links">
                        <Link to="/Routines">Routines</Link>
                    </div>

                    <div className="header-links">
                        <Link to="/Activities">Activities</Link>
                    </div>
                    <div className="header-links">
                        <Logout />
                    </div>

                </div>
                <br></br>

                <div className="main-content">
                    <div className="hightlighter">
                    <h2>Let's Get Fit!</h2>
                    </div>
                    <Switch>
                        <Route path="/SignUpForm" component={SignUpForm} />
                        <Route path="/LoginForm" component={LoginForm} />
                        <Route path="/UserRoutines" component={UserRoutines} />
                        <Route path="/Routines" component={Routines} />
                        <Route path="/Activities" component={Activities} />
                    </Switch>
                </div>
            </div>


        </div>

    )
}

export default App;

