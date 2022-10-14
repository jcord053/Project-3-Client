import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AddScorecard(){

  const navigate = useNavigate()

  const {courseId} = useParams()

  const [state, setState] = useState({
    date: '',
    hole1: 0,
    hole2: 0,
    hole3: 0,
    hole4: 0,
    hole5: 0,
    hole6: 0,
    hole7: 0,
    hole8: 0,
    hole9: 0,
    hole10: 0,
    hole11: 0,
    hole12: 0,
    hole13: 0,
    hole14: 0,
    hole15: 0,
    hole16: 0,
    hole17: 0,
    hole18: 0
  });

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });

  const handleSubmit = event => {
    event.preventDefault();
    const storedToken = localStorage.getItem('authToken');
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/scorecards/${courseId}`, state, {
        headers: {
          authorization: `Bearer ${storedToken}`
        }
      })
      .then(res => {
        console.log(res.data);
        navigate('/profile')
      })
      .catch(err => console.log(err))

  }

  return (
    <div>
      <h2>Add Scorecard</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>
            Date:
          </label>
          <input
            name="date"
            type="date"
            value={state.date}
            onChange={updateState}
          />
        </div>
        <div className='input'>
          <label>
            Hole 1:
          </label>
          <input
            name="hole1"
            type="number"
            value={state.hole1}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 2:
          </label>
          <input
            name="hole2"
            type="number"
            value={state.hole2}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 3:
          </label>
          <input
            name="hole3"
            type="number"
            value={state.hole3}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 4:
          </label>
          <input
            name="hole4"
            type="number"
            value={state.hole4}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 5:
          </label>
          <input
            name="hole5"
            type="number"
            value={state.hole5}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 6:
          </label>
          <input
            name="hole6"
            type="number"
            value={state.hole6}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 7:
          </label>
          <input
            name="hole7"
            type="number"
            value={state.hole7}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 8:
          </label>
          <input
            name="hole8"
            type="number"
            value={state.hole8}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 9:
          </label>
          <input
            name="hole9"
            type="number"
            value={state.hole9}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 10:
          </label>
          <input
            name="hole10"
            type="number"
            value={state.hole10}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 11:
          </label>
          <input
            name="hole11"
            type="number"
            value={state.hole11}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 12:
          </label>
          <input
            name="hole12"
            type="number"
            value={state.hole12}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 13:
          </label>
          <input
            name="hole13"
            type="number"
            value={state.hole13}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 14:
          </label>
          <input
            name="hole14"
            type="number"
            value={state.hole14}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 15:
          </label>
          <input
            name="hole15"
            type="number"
            value={state.hole15}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 16:
          </label>
          <input
            name="hole16"
            type="number"
            value={state.hole16}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 17:
          </label>
          <input
            name="hole17"
            type="number"
            value={state.hole17}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div className='input'>
          <label>
            Hole 18:
          </label>
          <input
            name="hole18"
            type="number"
            value={state.hole18}
            onChange={updateState}
            className='num-input'
          />
        </div>
        <div>
          <button>
            Add Scorecard
          </button>
        </div>
      </form>
    </div>
  );

}

export default AddScorecard;