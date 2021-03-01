import React, { useReducer } from 'react';
import { timeReducer } from '../reducer/timeReducer';

const initialState = {
    d: 8,
    h: 23,
    m: 55,
    s: 41
}

export const Timer = () => {
    
    const [state, dispatch] = useReducer(timeReducer, initialState);

    const {d, h, m, s} = state;
    console.log(state);


    return (
        <div className="container timer">
            <h1>We're launching soon</h1>

            <ul className="timer_cards">
                <li className="full_cards">
                    <div className="card_face_top">
                        <div className="card_top">
                            <p>{d}</p>
                        </div>
                        <div className="card_bottom">
                            <p>{d-1}</p>
                        </div>
                    </div>
                    <div className="card_face_back">
                        <div className="card_top_back">
                            <p>{d-1}</p>
                        </div>
                        <div className="card_bottom_back">
                            <p>{d}</p>
                        </div>
                    </div>
                    <span>Days</span>
                </li>
                <li className="full_cards">
                    <div className="card_face_top">
                        <div className="card_top">
                            <p>{h}</p>
                        </div>
                        <div className="card_bottom">
                            <p>{h-1}</p>
                        </div>
                    </div>
                    <div className="card_face_back">
                        <div className="card_top_back">
                            <p>{h-1}</p>
                        </div>
                        <div className="card_bottom_back">
                            <p>{h}</p>
                        </div>
                    </div>
                    <span>Hours</span>
                </li>
                <li className="full_cards">
                    <div className="card_face_top">
                        <div className="card_top">
                            <p>{m}</p>
                        </div>
                        <div className="card_bottom">
                            <p>{m-1}</p>
                        </div>
                    </div>
                    <div className="card_face_back">
                        <div className="card_top_back">
                            <p>{m-1}</p>
                        </div>
                        <div className="card_bottom_back">
                            <p>{m}</p>
                        </div>
                    </div>
                    <span>Minutes</span>
                </li>
                <li className="full_cards">
                    <div className="card_face_top">
                        <div className="card_top">
                            <p>{s}</p>
                        </div>
                        <div className="card_bottom">
                            <p>{s-1}</p>
                        </div>
                    </div>
                    <div className="card_face_back">
                        <div className="card_top_back">
                            <p>{s-1}</p>
                        </div>
                        <div className="card_bottom_back">
                            <p>{s}</p>
                        </div>
                    </div>
                    <span>Seconds</span>
                </li>
                
            </ul>
        </div>
    )
}
