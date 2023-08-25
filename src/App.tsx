import React, { useEffect, useState } from "react"
import "./App.css"

function App() {
    const mockData = [
        {
            id: 1,
            label: 'Some label 1'
        },
        {
            id: 2,
            label: 'Some label 2'
        },
        {
            id: 3,
            label: 'Some label 3'
        },
        {
            id: 4,
            label: 'Some label 4'
        },
        {
            id: 5,
            label: 'Some label 5'
        }
    ];

    const [message, setMessage] = useState("0 Times clicked")
    const [count, setCount] = useState(0)
    const [items, setItems] = useState(mockData);

    useEffect(() => {
        document.title = `${count} Times clicked`; // Update document title
    }, [count]);

    const onClick = () => {
        setCount(count + 1)
    }

    return (
        <div className="container">
            <button onClick={onClick}>Click here</button>
            <div style={{ marginLeft: '1rem' }}>{message}</div>

            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.label}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
