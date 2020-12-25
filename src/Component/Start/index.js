import React from 'react'
import './style.css'

function Start() {

    return (
        <div>
            <div className="container start p-4">
                <div className="row top">
                    How Much do you know?
                </div>
                <div className="row middle">
                    <button className="btn button-style">
                        Start
                    </button>
                </div>
                <div className="row bottom">
                    Timed Quiz
                </div>
            </div>
        </div>
    )
}

export default Start