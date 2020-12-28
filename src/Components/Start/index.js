import React from 'react'
import './style.css'

function Start() {

    return (
        <div>
            <div className="container start p-4">
                <div className="top">
                    <h3 className="lead">How Much do you know?</h3>
                </div>
                <div className="middle">
                    <button className="btn button-style">
                        Start
                    </button>
                </div>
                <div className="bottom">
                    Timed Quiz
                </div>
            </div>
        </div>
    )
}

export default Start