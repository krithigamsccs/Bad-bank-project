import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Withdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;

    // onclick update balance in user context
    function makeWithdraw() {
        if (!activeUser) {
            alert("Please log in to make a withdrawal.");
            return;
        }

        if (0 < withdrawAmount && withdrawAmount <= activeUser.balance) {
            activeUser.balance -= withdrawAmount;
            alert("Thank You and Visit Again..!.");
            setWithdrawAmount(0);
            document.getElementById("withdraw").value = "";
        } else if (0 > withdrawAmount) {
            alert("Enter a positive number.");
        } else {
            alert("Insufficient Balance.");
        }
    }

    return (
        <div
            className="withdraw-container"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                maxWidth: "100vw", // Adjusted maxWidth to fit the viewport width
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9AoZejWR8Ag8hYjMJeXvFq4RBnyMQSI144p3M_8I6ODZgaJjD17j5qEGl6Cxnmyhkd4&usqp=CAU')`, // Corrected syntax for setting background image
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px",
                margin: "0",
                position: "relative",
            }}
        >
            <div
                style={{
                    width: "500px",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                    animation: "glow 1.5s infinite alternate",
                    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfMtVABXRhsDEVZm6RljpFpUzg_pQY6RMtQ&usqp=CAU')`, // Corrected syntax for setting background image
                    backgroundColor: "rgba(255, 255, 255, 0.8)", // Added a semi-transparent white background
                }}
            >
                {activeUser ? (
                    <>
                        <h2 style={{ fontFamily: "Arial", fontSize: "24px", color: "blue" }}>Withdraw</h2>
                        <p style={{ fontFamily: "Arial", fontSize: "16px", color: "white" }}>Account Balance: ${activeUser.balance}</p>
                        <label htmlFor="withdraw" style={{ fontFamily: "Arial", fontSize: "16px", color: "black" }}>Withdraw Amount</label>
                        <br />
                        <input
                            type="number"
                            className="form-control"
                            id="withdraw"
                            placeholder="Enter amount"
                            onChange={(e) =>
                                setWithdrawAmount(
                                    Number(e.currentTarget.value)
                                )
                            }
                        />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-light"
                            onClick={makeWithdraw}
                            disabled={withdrawAmount ? false : true}
                            style={{
                                backgroundColor: "skyblue",
                                color: "#ffffff",
                                border: "none",
                                padding: "10px 20px",
                                cursor: "pointer",
                                fontFamily: "Arial",
                                fontSize: "16px",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#0056b3")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "#007bff")
                            }
                        >
                            Withdraw
                        </button>
                    </>
                ) : (
                    <p style={{ fontFamily: "Arial", fontSize: "16px", color: "red" }}>Please log in to make a withdrawal.</p>
                )}
            </div>
        </div>
    );
}

export default Withdraw;
