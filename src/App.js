import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AddCourse from './pages/AddCourse';
import AddScorecard from './pages/AddScorecard';
import SingleCoursePage from './pages/SingleCoursePage';
import SingleScorecardPage from './pages/SingleScorecardPage';
import CourseListPage from './pages/CourseListPage';
import ScorecardListPage from './pages/ScorecardListPage';

import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';


function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>




        <Route path="/" element={

            <HomePage />
        } />



        <Route path="/signup" element={
          <IsAnon>
            <SignupPage />
          </IsAnon>
        } />

        <Route path="/login" element={
          <IsAnon>
            <LoginPage />
          </IsAnon>
        } />

        <Route path="/profile" element={
          <IsPrivate>
            <ProfilePage />
          </IsPrivate>
        } />

        <Route path="/createcourse" element={
          <IsPrivate>
            <AddCourse />
          </IsPrivate>
        } />

        <Route path="/createscorecard/:courseId" element={
          <IsPrivate>
            <AddScorecard />
          </IsPrivate>
        } />

        <Route path="/courses" element={
          <IsPrivate>
            <CourseListPage />
          </IsPrivate>
        } />

        <Route path="/scorecards" element={
          <IsPrivate>
            <ScorecardListPage />
          </IsPrivate>
        } />

        <Route path="/courses/:courseId" element={
          <IsPrivate>
            <SingleCoursePage />
          </IsPrivate>
        } />

        <Route path="/scorecards/:scorecardId" element={
          <IsPrivate>
            <SingleScorecardPage />
          </IsPrivate>
        } />



      </Routes>
      
    </div>
  );
}

export default App;
