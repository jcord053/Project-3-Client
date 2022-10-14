import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function SingleScorecardPage(){

  const navigate = useNavigate();

  const { scorecardId } = useParams();

  const [singleScorecard, setSingleScorecard] = useState(null);

  console.log(scorecardId);

  const getSingleScorecard = scorecardId => {

    const storedToken = localStorage.getItem('authToken');

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/scorecards/${scorecardId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => {console.log(res.data)
        setSingleScorecard(res.data.scorecard)})
      .catch(err => console.log(err))
  };

  const deleteSingleScorecard = scorecardId => {
    const storedToken = localStorage.getItem('authToken');
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/scorecards/${scorecardId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => {
        console.log(res);
        navigate('/profile');
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getSingleScorecard(scorecardId);
  }, [scorecardId])

  let parOutTotal = 0;
  let parInTotal = 0;
  let parTotal = 0;
  let scoreOutTotal = 0;
  let scoreInTotal = 0;
  let scoreTotal = 0;

  return (
    <div>
      {singleScorecard && (
        <>
          <div>
          <img src={singleScorecard.course.image} alt={singleScorecard.course.name} className='scorecard-image' />
            <h2>Course: {singleScorecard.course.name}</h2>
            <p>Date: {singleScorecard.date}</p>
            <div className='table'>
            <table>
                <thead>
                </thead>
                <tbody>
                    <tr className='table-holes'>
                        <th>HOLE</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>OUT</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                        <th>IN</th>
                        <th>TOTAL</th>
                    </tr>
                    <tr className='single-par'>
                        <td>Par</td>
                        <td>{singleScorecard.course.hole1}</td>
                        <td>{singleScorecard.course.hole2}</td>
                        <td>{singleScorecard.course.hole3}</td>
                        <td>{singleScorecard.course.hole4}</td>
                        <td>{singleScorecard.course.hole5}</td>
                        <td>{singleScorecard.course.hole6}</td>
                        <td>{singleScorecard.course.hole7}</td>
                        <td>{singleScorecard.course.hole8}</td>
                        <td>{singleScorecard.course.hole9}</td>
                        <td>{parOutTotal = singleScorecard.course.hole1 + singleScorecard.course.hole2 + singleScorecard.course.hole3 + singleScorecard.course.hole4 + singleScorecard.course.hole5
                            + singleScorecard.course.hole6 + singleScorecard.course.hole7 + singleScorecard.course.hole8 + singleScorecard.course.hole9}</td>
                        <td>{singleScorecard.course.hole10}</td>
                        <td>{singleScorecard.course.hole11}</td>
                        <td>{singleScorecard.course.hole12}</td>
                        <td>{singleScorecard.course.hole13}</td>
                        <td>{singleScorecard.course.hole14}</td>
                        <td>{singleScorecard.course.hole15}</td>
                        <td>{singleScorecard.course.hole16}</td>
                        <td>{singleScorecard.course.hole17}</td>
                        <td>{singleScorecard.course.hole18}</td>
                        <td>{parInTotal = singleScorecard.course.hole10 + singleScorecard.course.hole11 + singleScorecard.course.hole12 
                            + singleScorecard.course.hole13 + singleScorecard.course.hole14 + singleScorecard.course.hole15
                            + singleScorecard.course.hole16 + singleScorecard.course.hole17 + singleScorecard.course.hole18}</td>
                        <td>{parTotal = singleScorecard.course.hole1 + singleScorecard.course.hole2 + singleScorecard.course.hole3 + singleScorecard.course.hole4 + singleScorecard.course.hole5
                            + singleScorecard.course.hole6 + singleScorecard.course.hole7 + singleScorecard.course.hole8 + singleScorecard.course.hole9 + singleScorecard.course.hole10
                            + singleScorecard.course.hole11 + singleScorecard.course.hole12 + singleScorecard.course.hole13 + singleScorecard.course.hole14 + singleScorecard.course.hole15
                            + singleScorecard.course.hole16 + singleScorecard.course.hole17 + singleScorecard.course.hole18}</td>
                    </tr>
                
                
                    <tr>
                    <td>Score</td>
                        <td>{singleScorecard.hole1}</td>
                        <td>{singleScorecard.hole2}</td>
                        <td>{singleScorecard.hole3}</td>
                        <td>{singleScorecard.hole4}</td>
                        <td>{singleScorecard.hole5}</td>
                        <td>{singleScorecard.hole6}</td>
                        <td>{singleScorecard.hole7}</td>
                        <td>{singleScorecard.hole8}</td>
                        <td>{singleScorecard.hole9}</td>
                        <td>{scoreOutTotal = singleScorecard.hole1 + singleScorecard.hole2 + singleScorecard.hole3 + singleScorecard.hole4 + singleScorecard.hole5
                            + singleScorecard.hole6 + singleScorecard.hole7 + singleScorecard.hole8 + singleScorecard.hole9}</td>
                        <td>{singleScorecard.hole10}</td>
                        <td>{singleScorecard.hole11}</td>
                        <td>{singleScorecard.hole12}</td>
                        <td>{singleScorecard.hole13}</td>
                        <td>{singleScorecard.hole14}</td>
                        <td>{singleScorecard.hole15}</td>
                        <td>{singleScorecard.hole16}</td>
                        <td>{singleScorecard.hole17}</td>
                        <td>{singleScorecard.hole18}</td>
                        <td>{scoreInTotal = singleScorecard.hole10 + singleScorecard.hole11 + singleScorecard.hole12
                            + singleScorecard.hole13 + singleScorecard.hole14 + singleScorecard.hole15
                            + singleScorecard.hole16 + singleScorecard.hole17 + singleScorecard.hole18}</td>
                        <td>{scoreTotal = singleScorecard.hole1 + singleScorecard.hole2 + singleScorecard.hole3 + singleScorecard.hole4 + singleScorecard.hole5
                            + singleScorecard.hole6 + singleScorecard.hole7 + singleScorecard.hole8 + singleScorecard.hole9 + singleScorecard.hole10
                            + singleScorecard.hole11 + singleScorecard.hole12 + singleScorecard.hole13 + singleScorecard.hole14 + singleScorecard.hole15
                            + singleScorecard.hole16 + singleScorecard.hole17 + singleScorecard.hole18}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <p>Score relating to par: <span className='bold'>{scoreTotal - parTotal}</span></p>
          </div>
          {/* <TaskForm projectId={scorecardId} getSingleProject={getSingleScorecard} /> */}
          <div>
            <button
              onClick={() => {deleteSingleScorecard(scorecardId)
              navigate('/profile')}}
            >
              Delete Scorecard
            </button>
          </div>
        </>
      )} 
    </div>
  );
}

export default SingleScorecardPage;