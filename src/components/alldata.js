import React, { useContext } from "react";
import { UserContext } from "./context";

function AllData() {
    const ctx = useContext(UserContext);
    const currentUser = ctx.activeUser;
    let users = ctx.users;

    const animationStyle = `
        @keyframes fadeInOut {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
                transform: scale(1.05); /* Add a slight scale effect */
            }
            100% {
                opacity: 0;
            }
        }

        .fadeInOutAnimation {
            animation: fadeInOut 1.5s ease-in-out;
            transition: transform 0.5s; /* Add a smooth transition for the scale effect */
            cursor: pointer; /* Add pointer cursor to indicate interactivity */
        }

        .fadeInOutAnimation:hover {
            background-color:black; /* Change background color on hover */
        }
    `;
    const containerStyle = {
        display: 'float',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        transition: 'background-color 0.3s', // Smooth transition for background color change
    };
    
    const hoverContainerStyle = {
        ...containerStyle,
        backgroundColor: '#f8f9fa', // Background color on hover
        cursor: 'pointer', // Add pointer cursor on hover
    };

    const tableStyle = {
        fontFamily: 'Arial', // Set font family
        color: 'green', // Set font color
        fontSize: '20px', // Set font size
    };
    
    return (
        <div style={{ backgroundImage: `url("https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-12881.jpg?t=st=1710399240~exp=1710402840~hmac=7091f7e3fe5c88fa82f1ed1f262d63dfb923156d57ffe7d7439b0d2e5b1efd5d&w=996")`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <div style={containerStyle}>
            <style>{animationStyle}</style>
            <div className="container">
                <h1 style={{ fontFamily: 'Arial', color: 'darkgreen', fontSize: '24px' }}>All Data</h1> {/* Apply font family, color, and size */}
                <table className="table" style={tableStyle}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Balance</th> {/* Uncomment this line for the balance column */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentUser && (
                            <tr className="flipYAnimation fadeInOutAnimation">
                                <td>{currentUser.name}</td>
                                <td>{currentUser.email}</td>
                                <td>{currentUser.balance}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default AllData;
