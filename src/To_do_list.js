import React, { useState } from "react"

export default function ToDoList() {

    // using states to manage the list of todo, input field value of todo
    const [activity, setActivity] = useState('')
    const [listData, setListData] = useState([])

    function handleAdd() {
        if(!activity)
            return;
        setListData(prev => {
            const list = [...prev, activity]
            console.log(list);
            return list;
        })

        setActivity("")
    }

    function handleRemove(index) {
        setListData(listData.filter((data, i) => i != index))
    }

    function handleAll() {
        // just remove everything from the list of todos
        setListData([])
    }

    const showData = listData.map((data, i) => 
        <div className="todo-item">
            <li key={i}>{data}</li>
            <button onClick={() => handleRemove(i)}
                    className="todo-item-button"
            >Mark &#x2714; </button>
        </div>
    )

    // console.log(activity);

    return (
        <div className="Todo-list">
            <h1 className="Header">ToDo List</h1>
            <input type="text" placeholder="Any Activity"
                    value={activity} onChange={(e) => setActivity(e.target.value)}
            />

            <button type="submit"
                onClick={handleAdd}
                className="input-button">Add</button>

            {listData.length > 0 && <h3>Here are your todos</h3>}

            {listData.length == 0 && <h4>You are all Done!</h4>}

            {/* // rendering all the todo items in the listData list */}
            {showData}

            {listData.length>0 && 
                <button className="input-button mark-all"
                    onClick={handleAll}>
                    Mark All as completed </button>}
        </div>
    )
}