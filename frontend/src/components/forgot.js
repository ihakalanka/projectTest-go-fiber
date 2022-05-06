import React, {useState} from 'react';
import axios from "axios";

const Forgot = () => {
    const [email, setEmail] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:8080/api/forgot', {
            email
        });
    }

    return (
        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please set your email</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                           onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
};

export default Forgot;