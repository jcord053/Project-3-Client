import { useState } from 'react';
import axios from 'axios';

function ScorecardForm(props){

  const [state, setState] = useState({
    title: '',
    description: ''
  });

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });

  const storedToken = localStorage.getItem('authToken');

  const handleSubmit = event => {
    event.preventDefault();
    const scorecardObject = {
      ...state,
      courseId: props.courseId
    };
    axios.post('http://localhost:3001/api/tasks', scorecardObject, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => {
        console.log(res.data);
        props.getSingleCourse(props.courseId);
        setState({
          title: '',
          description: ''
        });
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Add Scorecard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
          </label>
          <input
            name="name"
            value={state.name}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 1
          </label>
          <input
            name="hole1"
            type="number"
            value={state.hole1}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 2
          </label>
          <input
            name="hole2"
            type="number"
            value={state.hole2}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 3
          </label>
          <input
            name="hole3"
            type="number"
            value={state.hole3}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 4
          </label>
          <input
            name="hole4"
            type="number"
            value={state.hole4}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 5
          </label>
          <input
            name="hole5"
            type="number"
            value={state.hole5}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 6
          </label>
          <input
            name="hole6"
            type="number"
            value={state.hole6}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 7
          </label>
          <input
            name="hole7"
            type="number"
            value={state.hole7}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 8
          </label>
          <input
            name="hole8"
            type="number"
            value={state.hole8}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 9
          </label>
          <input
            name="hole9"
            type="number"
            value={state.hole9}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 10
          </label>
          <input
            name="hole10"
            type="number"
            value={state.hole10}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 11
          </label>
          <input
            name="hole11"
            type="number"
            value={state.hole11}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 12
          </label>
          <input
            name="hole12"
            type="number"
            value={state.hole12}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 13
          </label>
          <input
            name="hole13"
            type="number"
            value={state.hole13}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 14
          </label>
          <input
            name="hole14"
            type="number"
            value={state.hole14}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 15
          </label>
          <input
            name="hole15"
            type="number"
            value={state.hole15}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 16
          </label>
          <input
            name="hole16"
            type="number"
            value={state.hole16}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 17
          </label>
          <input
            name="hole17"
            type="number"
            value={state.hole17}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Hole 18
          </label>
          <input
            name="hole18"
            type="number"
            value={state.hole18}
            onChange={updateState}
          />
        </div>
        <div>
          <button>
            Add Course
          </button>
        </div>
      </form>
    </div>
  );

}

export default ScorecardForm;