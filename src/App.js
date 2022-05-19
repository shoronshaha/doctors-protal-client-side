import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import MyHistory from './pages/Dashboard/MyHistory';

import Users from './pages/Dashboard/Users';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="appointment" element={
          <RequireAuth><Appointment /></RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth><Dashboard /></RequireAuth>
        } >

          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
          <Route path='myHistory' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
