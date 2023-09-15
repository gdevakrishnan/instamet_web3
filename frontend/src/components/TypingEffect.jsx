import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";

function TypingEffect() {
    const nav = useNavigate();
    return (
        <div className="hero_page">
            <div className="hero">
                <div className="typing-effect">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("For Instataneous Meeting")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Use")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("InstaMet")
                                .start();
                        }}
                    />
                </div>
                <p className="hero-subtitle">For Personalizes Meeting Experiance</p>
                <button className="hero-button" onClick={() => nav('/register')}>Get Started</button>
            </div>
        </div>
    );
}

export default TypingEffect;
