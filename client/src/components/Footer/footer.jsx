import React from 'react'
import rider from "../../assets/riders.png"
import "./foot.css"
const footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <img src={rider} alt="img" style={{
                        height:"50px",
                        width:"50px"
                    }}/>
                    <h3 style={{ color: "red" }}>Riders Interface</h3>
                    <p>-For Mood For Code-</p>

                </div>
                <div className="footer-bottom">
                    <p>copyright &copy;Ananthakumar Vishnurathan</p>

                </div>

            </footer>

        </>
    )
}

export default footer