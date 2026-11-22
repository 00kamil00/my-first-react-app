import { useState } from "react"

function Person() {
    const [person, setPerson] = useState({firstName: "John", lastName:"Doe", age: 100})

    const handleIncreaseAge = () => {
        const newPerson = {...person, age: person.age + 1}
        setPerson(newPerson)
    }

    const handleFirstNameChange = (event) => {
        setPerson({...person, firstName: event.target.value})
    }

    const handleLastNameChange = (event) => {
        setPerson({...person, lastName: event.target.value})
    }

    return (
        <>
            <h1>{person.firstName} {person.lastName}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
            <input type="text" value={person.firstName} onChange={handleFirstNameChange} />
            <input type="text"  value={person.lastName} onChange={handleLastNameChange} />
        </>
    )
}

export { Person }