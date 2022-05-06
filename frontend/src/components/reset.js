import React, {useState} from 'react';
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";

const Reset = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [navigate, setNavigate] = useState(false);

    const token = useParams();
    const submit = (e) => {
        e.preventDefault();

        console.log(token);
        console.log(password);
        console.log(passwordConfirm);
        axios.post('http://localhost:8080/api/reset', {
            token,
            password,
            password_confirm: passwordConfirm,
        });



        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return (
        <main className="form-signin">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please reset your password</h1>

                <div className="form-floating">
                    <input type="password" className="form-control mb-3" id="floatingPassword" placeholder="Password"
                           onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control mb-3" id="floatingPassword" placeholder="Password Confirm"
                           onChange={e => setPasswordConfirm(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password Confirm</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={submit}>Submit</button>
            </form>
        </main>
    );
};

export default Reset;