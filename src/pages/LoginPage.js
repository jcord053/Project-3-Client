import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/auth.context';

function LoginPage(){

  const { storeToken, authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3001/auth/login', state)
      .then(res => {
        console.log(res.data);
        storeToken(res.data.authToken);
        authenticateUser();
        navigate('/profile');
      })
      .catch(err => console.log(err))

  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>
            Username:
          </label>
          <input
            name="username"
            value={state.username}
            onChange={updateState}
          />
        </div>
        <div className='input'>
          <label>
            Password:
          </label>
          <input
            name="password"
            type="password"
            value={state.password}
            onChange={updateState}
          />
        </div>
        <div>
          <button>
            Log In
          </button>
        </div>
      </form>
    </div>
  );

}

export default LoginPage;