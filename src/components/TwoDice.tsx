import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());

    while (leftDie === rightDie) {
        setRightDie(d6());
    }

    const handleRollLeft = () => {
        setLeftDie(d6());
    };

    const handleRollRight = () => {
        setRightDie(d6());
    };

    let message = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            message = "Lose";
        } else {
            message = "Win";
        }
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            {message && <p>{message}</p>}
            <Button onClick={handleRollLeft}>Roll Left</Button>
            <Button onClick={handleRollRight}>Roll Right</Button>
        </div>
    );
}
