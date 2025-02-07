// updater function = uma função que é passada como argumento para setState()
// usado para multiplas atualizações de estado, diferente do refresh de um site por exemplo, que embora você clique 10x ele só atualiza a página 1x


import React, {useState} from "react"

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {

        // React coloca a updater function em uma fila, imagino que seja a mesma coisa que a fila de execução do java

        // updater functions
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(<div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>)
}

export default Counter