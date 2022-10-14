import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar(){

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className='nav-bar'>
      
      { isLoggedIn && (
        <>
          <div>
            <Link to="/profile"><button>Home</button></Link>
            <Link to="/courses"><button>Courses</button></Link>
            <Link to="/scorecards"><button>Scorecards</button></Link>
            <button onClick={logOutUser}>Logout</button>
          </div>
        </>
      )}
      { !isLoggedIn && (
        <>
          <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Log In</button></Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;