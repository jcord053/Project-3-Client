import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/auth.context';

function ProfilePage(){

  const [scorecardArray, setScorecardArray] = useState([]);

  useEffect(() => {

    const storedToken = localStorage.getItem('authToken');

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/scorecards`,
     {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
     })
      .then(res => {  console.log(res.data)
        setScorecardArray(res.data.user.scorecards) })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h2>Your Most Recent Scorecards</h2>

      
      
      <Link to={`/createcourse`} ><button>Create Course</button></Link>
      <Link to={`/courses`} ><button>View All Courses</button></Link>
      <Link to={`/scorecards`} ><button>View All Scorecards</button></Link>
    
    
      {scorecardArray.slice(0, 2).map(element => {

        let parOutTotal = 0;
        let parInTotal = 0;
        let parTotal = 0;
        let scoreOutTotal = 0;
        let scoreInTotal = 0;
        let scoreTotal = 0;

        return (
          <div key={element._id}>
          <p><span className='bold'>{element.course.name}</span></p>
          <p>Date: {element.date}</p>
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
                      <td>{element.course.hole1}</td>
                      <td>{element.course.hole2}</td>
                      <td>{element.course.hole3}</td>
                      <td>{element.course.hole4}</td>
                      <td>{element.course.hole5}</td>
                      <td>{element.course.hole6}</td>
                      <td>{element.course.hole7}</td>
                      <td>{element.course.hole8}</td>
                      <td>{element.course.hole9}</td>
                      <td>{parOutTotal = element.course.hole1 + element.course.hole2 + element.course.hole3 + element.course.hole4 + element.course.hole5
                          + element.course.hole6 + element.course.hole7 + element.course.hole8 + element.course.hole9}</td>
                      <td>{element.course.hole10}</td>
                      <td>{element.course.hole11}</td>
                      <td>{element.course.hole12}</td>
                      <td>{element.course.hole13}</td>
                      <td>{element.course.hole14}</td>
                      <td>{element.course.hole15}</td>
                      <td>{element.course.hole16}</td>
                      <td>{element.course.hole17}</td>
                      <td>{element.course.hole18}</td>
                      <td>{parInTotal = element.course.hole10 + element.course.hole11 + element.course.hole12
                           + element.course.hole13 + element.course.hole14 + element.course.hole15
                          + element.course.hole16 + element.course.hole17 + element.course.hole18}</td>
                      <td>{parTotal = element.course.hole1 + element.course.hole2 + element.course.hole3 + element.course.hole4 + element.course.hole5
                          + element.course.hole6 + element.course.hole7 + element.course.hole8 + element.course.hole9 + element.course.hole10
                          + element.course.hole11 + element.course.hole12 + element.course.hole13 + element.course.hole14 + element.course.hole15
                          + element.course.hole16 + element.course.hole17 + element.course.hole18}</td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                    <td>Score</td>
                    <td>{element.hole1}</td>
                    <td>{element.hole2}</td>
                    <td>{element.hole3}</td>
                    <td>{element.hole4}</td>
                    <td>{element.hole5}</td>
                    <td>{element.hole6}</td>
                    <td>{element.hole7}</td>
                    <td>{element.hole8}</td>
                    <td>{element.hole9}</td>
                    <td>{scoreOutTotal = element.hole1 + element.hole2 + element.hole3 + element.hole4 + element.hole5
                          + element.hole6 + element.hole7 + element.hole8 + element.hole9}</td>
                    <td>{element.hole10}</td>
                    <td>{element.hole11}</td>
                    <td>{element.hole12}</td>
                    <td>{element.hole13}</td>
                    <td>{element.hole14}</td>
                    <td>{element.hole15}</td>
                    <td>{element.hole16}</td>
                    <td>{element.hole17}</td>
                    <td>{element.hole18}</td>
                    <td>{scoreInTotal = element.hole10 + element.hole11 + element.hole12
                         + element.hole13 + element.hole14 + element.hole15
                          + element.hole16 + element.hole17 + element.hole18}</td>
                    <td>{scoreTotal = element.hole1 + element.hole2 + element.hole3 + element.hole4 + element.hole5
                          + element.hole6 + element.hole7 + element.hole8 + element.hole9 + element.hole10
                          + element.hole11 + element.hole12 + element.hole13 + element.hole14 + element.hole15
                          + element.hole16 + element.hole17 + element.hole18}</td>
                  </tr>
              </tfoot>
            </table>
            </div>
            <p>Score relating to par: <span className='bold'>{scoreTotal - parTotal}</span></p>
            <Link to={`/courses/${element.course._id}`} ><button>View Course</button></Link>
            <Link to={`/scorecards/${element._id}`} ><button>View Scorecard</button></Link>
          
          </div>
        );
      })}
    </div>
  );

}

export default ProfilePage;