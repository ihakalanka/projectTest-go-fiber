import {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:8080/api/register', {
            firstName, lastName, email, password
        });

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return (
        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <div className="form-floating">
                    <input className="form-control" placeholder="First Name"
                           onChange={e => setFirstName(e.target.value)}
                    />
                    <label>First Name</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" placeholder="Last Name"
                           onChange={e => setLastName(e.target.value)}
                    />
                    <label>Last Name</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                           onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control mb-3" id="floatingPassword" placeholder="Password"
                           onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}

export default Register;