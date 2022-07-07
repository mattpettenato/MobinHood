import React from 'react';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { Route } from 'react-router-dom';
import HomePage from './home_page/home_page'

const App = () => (
  <div>
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
    <Route exact path="/" component={HomePage}/>
  </div>
);

export default App; 