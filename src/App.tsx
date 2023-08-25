import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const message = `${count} Times clicked`;
        document.title = message;
    }, [count]);

    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="container">
            <button onClick={onClick}>Click here</button>
            <div style={{ marginLeft: "1rem" }}>{count} Times clicked</div>
        </div>
    );
}

export default App;