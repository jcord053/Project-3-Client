import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CourseListPage(){

  const [coursesArray, setCoursesArray] = useState([]);

  useEffect(() => {

    const storedToken = localStorage.getItem('authToken');

    axios.get('http://localhost:3001/api/courses',
     {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
     })
      .then(res => setCoursesArray(res.data.courses))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
    <h1>All Courses</h1>
    <Link to={`/createcourse`} ><button>Create A New Course</button></Link>
      {coursesArray.map(element => {
        return (
          <div key={element._id}>
            <h3>{element.name}</h3>
            <img src={element.image} alt={element.name} className='list-image' />
            <div>
              <Link to={`/courses/${element._id}`} ><button>View {element.name}</button></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseListPage;