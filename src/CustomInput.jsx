import { use, useState } from "react";

function CustomInput() {
    const [value, setValue] = useState("")

    return (
        <div>
            <input 
                type="text" 
                value={value} 
                onChange={(event) => setValue(event.target.value)}
            />
            <p>Currently entered text: {value}</p>
        </div>
    )
}

export { CustomInput }