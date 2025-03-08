import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Easter = "🐰",
    Halloween = "🎃",
    NewYear = "🎆",
    Thanksgiving = "🦃"
}

const alphabeticalOrder: Record<Holiday, Holiday> = {
    [Holiday.Christmas]: Holiday.Easter,
    [Holiday.Easter]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.NewYear,
    [Holiday.NewYear]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.Christmas
};

const yearOrder: Record<Holiday, Holiday> = {
    [Holiday.NewYear]: Holiday.Easter,
    [Holiday.Easter]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.Christmas,
    [Holiday.Christmas]: Holiday.NewYear
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Christmas
    );

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button
                onClick={() => {
                    setCurrentHoliday(alphabeticalOrder[currentHoliday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setCurrentHoliday(yearOrder[currentHoliday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
