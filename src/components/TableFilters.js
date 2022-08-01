import { useEffect, useState } from "react"

export function TableFilters({handleSearch}){
    const [select, setSelect] = useState("first_name")
    const [input, setInput] = useState("")

    const handleSelect = (event)=>{
        setSelect(event.target.value)

    }

    const handleInput = (event)=>{
        setInput(event.target.value)

    }

    useEffect(()=>{
        handleSearch(select, input);
    }, [select, input])

    return(
        <div>
            <select onChange={handleSelect} value={select}>
                <option value="first_name">First Name</option>
                <option value="last_name">Last Name</option>
                <option value="phone">Phone</option>
            </select>
            <input onInput={handleInput} value={input}/>
        </div>
    )
}