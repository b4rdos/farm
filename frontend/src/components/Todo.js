import axios from "axios";
import React from "react";
import {API_DELETE_TODO_URL} from '../constants/urls';

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`${API_DELETE_TODO_URL}/${title}`).then(res => console.log(res.data))
    };
    return (
        <div>
            <p>
                <span style={{"fontWeight": "bold, underline"}}>
                    {props.todo.title}: 
                </span> {props.todo.description}
                <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" style={{"borderRadius": "50px"}}>X</button>
            </p>
            <hr />
        </div>
    )
}

export default TodoItem;