import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/auth.context';

function HomePage(){

  return (
    <div>
        <h1>Track All Your Golf Scores In One Place!</h1>
        <img src='https://media.istockphoto.com/photos/golf-ball-sitting-on-a-green-with-the-flagstick-nearby-picture-id178961372?k=20&m=178961372&s=612x612&w=0&h=wUJp-rudbfgTnWEI7WZd_zh0UWeek7vKJITsY4eRQI0=' alt='Golf Ball' />
        <p>Sign up or Log In to Start Tracking!</p>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/login"><button>Log In</button></Link>
    </div>
  );

}

export default HomePage;