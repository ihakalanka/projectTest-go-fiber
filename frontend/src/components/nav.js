import React, {useEffect, useState} from 'react';
import axios from "axios";

export const Nav = () => {
    const [firstName, setFirstName] = useState('');
    //const [removeCookie] = useCookies(['jwt']);
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

    const logOut = async () =>{
        await axios.post('http://localhost:8080/api/logout', {}, {withCredentials: true});
        setFirstName('')
    }

    let menu;

    if(firstName===''){
        menu = (
            <div className="text-end">
                <a href="/login" className="btn btn-outline-light me-2">Login</a>
                <a href="/register" className="btn btn-outline-light me-2">Register</a>
            </div>
        )
    }
    else{
        menu = (
            <div className="text-end">
                <a href="/login" className="btn btn-outline-light me-2" onClick={logOut} >Logout</a>
            </div>
        )
    }

    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                        </ul>
                        {menu}
                    </div>
                </div>
            </header>
        </div>
    );
}