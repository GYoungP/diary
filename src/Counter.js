import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ intiVal }) => {
    const [count, setCount] = useState(intiVal);

    const onInc = () => {
        setCount(count + 1);
    };
    const onDec = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
            <OddEvenResult count={count} />
        </div>
    );
};

Counter.defaultProps = {
    intiVal: 0,
};

export default Counter;
