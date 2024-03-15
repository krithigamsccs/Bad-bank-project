import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function CreateAccount() {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label + ' required');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        if (field === password && field.length < 8) {
            alert('Password must be 8 or more characters long');
            return false;
        }
        if (field === email) {
            var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (field.match(emailFormat)) {
                return true;
            } else {
                alert('Enter a valid email address');
                return false;
            }
        }
        return true;
    }

    function handleCreate() {
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.setUsers((existingState) => [
            ...existingState,
            { name, email, password, balance: 100 },
        ]);
        alert('Successfully created account!');
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    const animatedContainerStyle = {
        maxWidth: '500px',
        margin: '8em auto',
        padding: '25px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundSize: 'cover',
        display:"float",
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdStHwedDH7mBvZAm6VsOQTrYilpFjJDF9_g&usqp=CAU")`,
        animation: `${show ? 'fadeIn 1s ease-in-out, glow 1.5s infinite alternate, rotateContainer 4s linear' : 'fadeOut 1s ease-in-out'}`,        fontFamily: 'Field, sans-serif', // Set font family to Field
    };

    const styles = `
    @keyframes doorOpen {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(-90deg);
        }
    }
    
    
    

        @keyframes glow {
            0% {
                box-shadow: 0 0 10px #fff;
            }
            50% {
                box-shadow: 0 0 5px blue, 0 0 10px blue, 0 0 20px blue;,0 0 20px blue;
            }
            100% {
                box-shadow: 0 0 10px #fff;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;

    return (
        
        
        <div style={{ backgroundImage: `url("https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-12881.jpg?t=st=1710399240~exp=1710402840~hmac=7091f7e3fe5c88fa82f1ed1f262d63dfb923156d57ffe7d7439b0d2e5b1efd5d&w=996")`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <style>{styles}</style>
            <div className="container" style={animatedContainerStyle}>
                
                <h3>Create Account</h3>
                <div>
                    Name<br />
                    <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
                    Email address<br />
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
                    Password<br />
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
                    <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={name || email || password ? false : true}>Create Account</button>
                </div>
                {!show && (
                    <>
                        <h5>Success</h5>
                        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                    </>
                )}
                {status && <p>{status}</p>}
            </div>
        </div>
    );
}

export default CreateAccount;
