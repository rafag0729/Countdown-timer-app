import React from 'react';

export const Timer = () => {
    return (
        <div className="container timer">
            <h1>We're launching soon</h1>

            <div className="timer_cards">
                <p>
                    08
                    <span>Days</span>
                </p>
                <p>
                    23
                    <span>Hours</span>
                </p>
                <p>
                    55
                    <span>Minutes</span>
                </p>
                <p>
                    41
                    <span>Seconds</span>
                </p> 
            </div>
        </div>
    )
}
