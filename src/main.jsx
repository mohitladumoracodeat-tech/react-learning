import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Students from './pages/Students'
import AddStudent from './pages/Add-Student'
import About from './pages/About'
import NotFound from './pages/NotFound'
import StudentCard from './pages/StudentCard'
import Calculator from './pages/Calculator'
import Useefect from './pages/Useefect'
import UserList from './pages/tasks/UserList'
import SearchUsers from './pages/tasks/SearchUsers'
import PostsAutoRefresh from './pages/tasks/PostsAutoRefresh'
import Timer from './pages/tasks/Timer'
import CreatePost from './pages/tasks/CreatePost'
import UserDetails from './pages/tasks/UserDetails'
import PostsPagination from './pages/tasks/PostsPagination'
import OnlineStatus from './pages/tasks/OnlineStatus'
import RandomQuote from './pages/tasks/RandomQuote'
import MiniDashboard from './pages/tasks/MiniDashboard'


import Login from './pages/login-panale/Login'
import Register from './pages/login-panale/Register'
import User from './pages/login-panale/User'
import Admin from './pages/login-panale/Admin'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/studentcard" element={<StudentCard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/addstudents" element={<AddStudent />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/useeffect" element={<Useefect />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/searchusers" element={<SearchUsers />} />
        <Route path="/PostsAutoRefresh" element={<PostsAutoRefresh />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/postspagination" element={<PostsPagination />} />
        <Route path="/onlinestatus" element={<OnlineStatus />} />
        <Route path="/randomquote" element={<RandomQuote />} />
        <Route path="/minidashboard" element={<MiniDashboard />} />


        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)