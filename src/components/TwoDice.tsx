import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const initialLeftDie = d6();
    let initialRightDie = d6();
    while (initialRightDie === initialLeftDie) {
        initialRightDie = d6();
    }

    const [leftDie, setLeftDie] = useState<number>(initialLeftDie);
    const [rightDie, setRightDie] = useState<number>(initialRightDie);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    let message = "";
    if (leftDie === rightDie) {
        message = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}
