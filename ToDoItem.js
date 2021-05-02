import React from "react"

function ToDoItem(props){
    return (
        <div className = "to-do-item">
        <input type="checkbox" id = "task1" />
            <p> {props.item} </p>
            </div>
    )
}

export default ToDoItem