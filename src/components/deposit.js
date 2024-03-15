import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Deposit() {
    const [depositAmount, setDepositAmount] = useState();
    const ctx = useContext(UserContext);
    const activeUser = ctx.activeUser;

    function makeDeposit() {
        if (depositAmount >= 0) {
            const updatedBalance = activeUser.balance + depositAmount;
            ctx.setActiveUser({ ...activeUser, balance: updatedBalance });
            alert("Your Amount Will be Deposited..!.");
        } else {
            alert("Deposit values cannot be negative.");
        }
        setDepositAmount();
    }

    return (
        <div
            className="withdraw-container"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                maxWidth: "100vw",
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0urwp2hC6qR1qf-o1TzzNAT3SDLRigloPg&usqp=CAU')`, // Corrected syntax for setting background image
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px",
                margin: "0",
                position: "relative",
            }}
        >
            <div
                className="login-container"
                style={{
                    position: "absolute",
                    bottom: "300px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "500px",
                    backgroundImage: `url('https://media.tenor.com/S-TdSjRmKYcAAAAj/piggy-bank-crypto.gif')`, // Corrected syntax for setting background image
                    backgroundSize: "cover",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                    animation: "glow 1.5s infinite alternate",
                }}
            >
                <div className="container">
                    <h2 style={{ color: "blue", fontFamily: "Arial", fontSize: "24px" }}>Deposit</h2>
                    <p style={{ color: "white", fontFamily: "Arial", fontSize: "20px" }}>Account Balance: ${activeUser ? activeUser.balance : "**"}</p>
                    <label htmlFor="deposit" style={{ color: "black", fontFamily: "Arial", fontSize: "16px" }}>Deposit Amount</label>
                    <br />
                    <input
                        type="number"
                        className="form-control"
                        id="deposit"
                        placeholder="Enter amount"
                        onChange={(e) =>
                            setDepositAmount(Number(e.currentTarget.value))
                        }
                    />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={makeDeposit}
                        // disabled={depositAmount <= 0}
                        style={{ 
                            backgroundColor: "skyblue",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px 20px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "skyblue")
                        }
                    >
                        Deposit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Deposit;
