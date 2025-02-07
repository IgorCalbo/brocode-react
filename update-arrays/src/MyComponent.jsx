import React, {useState} from 'react'

function MyComponent() {

    const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFruits() {
        const newFruit= document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value = "";

        setFruits(f => [...f, newFruit]);
    }

    function handleRemoveFruits(index) {
        setFruits(fruits.filter((_, i) => i !== index));
    }

    return(<div>
        <h2>List of Fruits</h2>
        <ul>
            {fruits.map((fruit, index) => <li key={index} onClick={() => handleRemoveFruits(index)}>{fruit}</li>)}
        </ul>
        <input type='text' id='fruitInput' placeholder='Enter fruit name'/>
        <button onClick={handleAddFruits}>Add fruit</button>
    </div>)
}

export default MyComponent