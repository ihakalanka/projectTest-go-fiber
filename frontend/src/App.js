import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Nav} from "./components/nav";
import {useEffect, useState} from "react";
import axios from "axios";
import {Home} from "./components/home";
import {Login} from "./components/login";
import Forgot from "./components/forgot";
import Reset from "./components/reset";
import Register from "./components/register";


function App() {
  const [firstName, setFirstName] = useState('');
  useEffect(() => {
    (
        async () => {
          await axios.get(`http://localhost:8080/api/user`, {withCredentials: true})
              .then((res)=>{
                setFirstName(res.data.firstName);
              })
              .catch((err)=> {
                console.log(err)
              })
        }
    )();
  },[])
  return <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/resetpass/:token" element={<Reset/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;