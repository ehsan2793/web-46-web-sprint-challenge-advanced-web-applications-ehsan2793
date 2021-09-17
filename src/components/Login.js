import axios from "axios";
import React, { useState } from "react";

const initalValue = {
  username: '',
  password: '',
};
const Login = (props) => {
  const { push } = props.history;
  const [formValue, setFormValue] = useState(initalValue)
  const [error, setError] = useState('')
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (formValue.username !== 'Lambda' && formValue.password !== 'School') {  // if username and password dont match give error
      setError('Username or Password not valid')
    } else {                                                      // else they match do axios call retrieve a token from the api
      return axios.post('http://localhost:5000/api/login', formValue)
        .then(response => {
          localStorage.setItem('token', response.data.payload)                /// sve the token in localStorage and push to BubblePage page 
          push('/BubblePage')

        })
        .catch(error => {
          setError('it seems like there is a problem with server please be patient until we fix the server ')
        });

    }

  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input placeholder='username' onChange={handleChange} value={formValue.username} type="text" id="username" name="username" />
        <label htmlFor="password">Password: </label>
        <input placeholder='password' onChange={handleChange} value={formValue.password} type="password" id="password" name="password" />
        <button id="submit" type="submit" >Login</button>
      </form>

      {error ? <p id="error" className="error">{error}</p> : null}

    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"