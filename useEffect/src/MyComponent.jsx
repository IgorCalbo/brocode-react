// useEffect - side code
// 1. useEffect(() => {})               // Roda toda vez que é renderizado novamente
// 2. useEffect(() => {}, [])           // Roda apenas na montagem
// 3. useEffect(() => {}, [valor])      // Roda na montagem + quando algum valor muda

import React, { useState, useEffect } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // atualiza o título junto ao contador
    useEffect(() => {document.title = `Count: ${count} ${color}`}, [count, color]);

    // Atualiza o título apenas uma vez
    // useEffect(() => {
    //     document.title = `My Counter Program`;
    // }, []);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
    </>)
}

export default MyComponent