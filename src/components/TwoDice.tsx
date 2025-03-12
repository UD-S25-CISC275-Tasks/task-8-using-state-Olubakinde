import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(4);
    const [rightDie, setRightDie] = useState<number>(2);

    // Left Roll button function
    function rollLeft(): void {
        setLeftDie(d6());
    }
    // Right Roll button function
    function rollRight(): void {
        setRightDie(d6());
    }

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
