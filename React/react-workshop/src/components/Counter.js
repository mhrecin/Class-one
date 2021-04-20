import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [ count, setCount ] = useState(0);

    function handleReset(){
        setCount(0);
    }
    function handleUp(){
        setCount(prevCount => prevCount + 1);
    }
    function handleDown(){
        setCount(prevCount => prevCount -1);
    }

    // function handleCount(change){
    //     setCount(prev => prev + change);
    // }
    // this would replace the handleUp and handleDown
    // <button onClick={() => handleCount(+1)}></button>

    let classes = "Counter";
    if (count < 0) {
        classes += " negative";
    }

    return (
        <div className={classes}>
            <h3>Counter</h3>
            <p className="Counter__count">{count}</p>
            <p>
                <button type="button" onClick={handleDown}>Down</button>
                {count !== 0 && <button type="button" onClick={handleReset}>Reset</button>}
                <button type="button" onClick={handleUp}>Up</button>
            </p>
        </div>
    );
}

export default Counter;