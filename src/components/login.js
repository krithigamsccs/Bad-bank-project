import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const ctx = useContext(UserContext);

    function findUser() {
        let data = ctx.users;
        let matchingUser = data.find(user => loginEmail === user.email && loginPassword === user.password);
        ctx.setActiveUser(matchingUser);
        if (matchingUser === undefined) {
            alert('Invalid Current Details.');
        }
    }

    const logoutUser = () => {
        ctx.setActiveUser(null);
        setLoginEmail('');
        setLoginPassword('');
    };

    return (
        <div style={{ 
            backgroundImage: `url("https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-12881.jpg?t=st=1710399240~exp=1710402840~hmac=7091f7e3fe5c88fa82f1ed1f262d63dfb923156d57ffe7d7439b0d2e5b1efd5d&w=996")`, 
            backgroundSize: 'cover', 
            minHeight: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <div className="container" style={{ 
                maxWidth: "30rem", 
                maxHeight:"100rem",
                padding: '15px', 
                borderRadius: '15px', 
                boxShadow: '0 0 10px rgba(0, 0, 139, 0.5)', // Change boxShadow color to dark blue (RGB: 0, 0, 139)
                background: 'aquamarine', // Change background color to dark blue (RGB: 0, 0, 139)
                animation: 'glow 1.5s infinite alternate' 
            }}>
                <div style={{ 
                    backgroundImage: `url("https://img.freepik.com/premium-photo/businessman-pressing-bank-button-touch-screen-interface-internet-technology-concept_666034-717.jpg?w=1060")`, 
                    backgroundSize: "cover", 
                    width: "100%", 
                    height: "100%" 
                }}>
                    {!ctx.activeUser ? (
                        <form style={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            alignItems: "center" 
                        }}>
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)} />
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)} />
                            <button type="button" className="btn btn-light mt-3" onClick={findUser}>Login</button>
                        </form>
                    ) : (
                        <div>
                            <div className="card-header" style={{ fontFamily: 'Arial', color: 'white' }}>Welcome {ctx.activeUser.name}!</div> {/* Change font family to Arial and color to white */}
                            <div className="card-body" style={{ 
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems: "center" 
                            }}>
                                <button type="button" className="btn btn-light" onClick={logoutUser}>Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;

// CSS style
const styles = `
@keyframes glow {
    0% {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    50% {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(0, 0, 0, 0.5);
    }
    100% {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
}`;
