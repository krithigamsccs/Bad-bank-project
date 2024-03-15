import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context";

function NavBar() {
    const ctx = useContext(UserContext);
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
        ctx.setActiveUser(null);
    }

    const glowingNavbarStyle = `
        @keyframes glowing {
            0% {
                box-shadow: 0 0 10px #fff;
            }
            50% {
                box-shadow: 0 0 20px blue, 0 0 40px pink, 0 0 60px pink
            }
            75% {
                box-shadow: 0 0 60px blue, 0 0 80px pink, 0 0 100px pink
            }
            100% {
                box-shadow: 0 0 80px blue, 0 0 100px pink, 0 0 120px pink
            }
            100% {
                box-shadow: 0 0 10px #fff;
            }
        }

        @keyframes buttonGlow {
            0% {
                box-shadow: 0 0 10px #fff;
            }
            50% {
                box-shadow: 0 0 20px red, 0 0 40px red, 0 0 60px red;
            }
            100% {
                box-shadow: 0 0 10px #fff;
            }
        }

        .glowing-navbar {
            animation: glowing 1.5s infinite alternate;
            
        }

        .nav-item.nav-link:hover {
            animation: glowing 1.5s infinite alternate;
            border-radius: 1em;
        }

        .logout-btn:hover {
            animation: buttonGlow 1.5s infinite alternate;
            color: violet; // Change font color to violet
        }

        .glowing-text {
            animation: glowing 1.5s infinite alternate;
        }
    `;

    return (
        <div>
            <style>{glowingNavbarStyle}</style>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark glowing-navbar">
                <a className="navbar-brand px-3 glowing-text" href="#" data-toggle="tooltip" data-placement="bottom" title="Visit our homepage">Bank of Sulur </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mr-auto">
                        {ctx.activeUser ? (
                            <>
                                <a className="nav-item nav-link px-3" href="#/deposit" data-toggle="tooltip" data-placement="bottom" title="Make a deposit">Deposit</a>
                                <a className="nav-item nav-link px-3" href="#/withdraw" data-toggle="tooltip" data-placement="bottom" title="Make a withdraw">Withdraw</a>
                                <a className="nav-item nav-link px-3" href="#/allData" data-toggle="tooltip" data-placement="bottom" title="View data for all users">AllData</a>
                            </>
                        ) : (
                            <>
                                <a className="nav-item nav-link px-3" href="#/CreateAccount" data-toggle="tooltip" data-placement="bottom" title="Create a new account">Create Account</a>
                                <a className="nav-item nav-link px-3" href="#/login" data-toggle="tooltip" data-placement="bottom" title="Access your account">Login</a>
                                <a className="nav-item nav-link px-3" href="#/deposit" data-toggle="tooltip" data-placement="bottom" title="Access your account">Deposit</a>
                            </>
                        )}
                    </div>
                    <div className="ml-auto">
                        {ctx.activeUser && (
                            <button type="submit" className="btn btn-outline-info btn-sm logout-btn" onClick={handleClick}>LogOut</button>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
