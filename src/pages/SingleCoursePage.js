import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function SingleCoursePage(){

  const navigate = useNavigate();

  const { courseId } = useParams();

  const [singleCourse, setSingleCourse] = useState(null);

  console.log(courseId);

  const getSingleCourse = courseId => {

    const storedToken = localStorage.getItem('authToken');

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/courses/${courseId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => setSingleCourse(res.data.course))
      .catch(err => console.log(err))
  };

//   const deleteSingleCourse = courseId => {
//     const storedToken = localStorage.getItem('authToken');
//     axios.delete(`http://localhost:3001/api/courses/${courseId}`, {
//       headers: {
//         authorization: `Bearer ${storedToken}`
//       }
//     })
//       .then(res => {
//         console.log(res);
//         navigate('/profile');
//       })
//       .catch(err => console.log(err))
//   };

  useEffect(() => {
    getSingleCourse(courseId);
  }, [courseId])


  let outTotal = 0;
  let inTotal = 0;
  let parTotal = 0;

  return (
    <div>
      {singleCourse && (
        <>
          <div>
            <h2>{singleCourse.name}</h2>
            <img src={singleCourse.image} alt={singleCourse.name} className='course-image' />

            <div className='table'>
            <table>
                <thead>
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
                </thead>
                <tbody>
                    <tr className='single-par'>
                        <td>Par</td>
                        <td>{singleCourse.hole1}</td>
                        <td>{singleCourse.hole2}</td>
                        <td>{singleCourse.hole3}</td>
                        <td>{singleCourse.hole4}</td>
                        <td>{singleCourse.hole5}</td>
                        <td>{singleCourse.hole6}</td>
                        <td>{singleCourse.hole7}</td>
                        <td>{singleCourse.hole8}</td>
                        <td>{singleCourse.hole9}</td>
                        <td>{outTotal = singleCourse.hole1 + singleCourse.hole2 + singleCourse.hole3 + singleCourse.hole4 + singleCourse.hole5
                            + singleCourse.hole6 + singleCourse.hole7 + singleCourse.hole8 + singleCourse.hole9}</td>
                        <td>{singleCourse.hole10}</td>
                        <td>{singleCourse.hole11}</td>
                        <td>{singleCourse.hole12}</td>
                        <td>{singleCourse.hole13}</td>
                        <td>{singleCourse.hole14}</td>
                        <td>{singleCourse.hole15}</td>
                        <td>{singleCourse.hole16}</td>
                        <td>{singleCourse.hole17}</td>
                        <td>{singleCourse.hole18}</td>
                        <td>{inTotal = singleCourse.hole10 + singleCourse.hole11 + singleCourse.hole12 + singleCourse.hole13 
                        + singleCourse.hole14 + singleCourse.hole15 + singleCourse.hole16 + singleCourse.hole17 + singleCourse.hole18}</td>
                        <td>{parTotal = singleCourse.hole1 + singleCourse.hole2 + singleCourse.hole3 + singleCourse.hole4 + singleCourse.hole5
                            + singleCourse.hole6 + singleCourse.hole7 + singleCourse.hole8 + singleCourse.hole9 + singleCourse.hole10
                            + singleCourse.hole11 + singleCourse.hole12 + singleCourse.hole13 + singleCourse.hole14 + singleCourse.hole15
                            + singleCourse.hole16 + singleCourse.hole17 + singleCourse.hole18}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* {singleCourse.tasks.map(element => {
              return (
                <div>Task: {element.hole1}</div>
              );
            })} */}
          </div>
          {/* <ScorecardForm courseId={courseId} getSingleCourse={getSingleCourse} /> */}
          <div>
            <Link to={`/createscorecard/${singleCourse._id}`} ><button>Create a Scorecard</button></Link>
          </div>
        </>
      )} 
    </div>
  );
}

export default SingleCoursePage;