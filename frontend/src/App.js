import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import {API_GET_TODO_URL, API_POST_TODO_URL} from './constants/urls';
import TodoView from './components/TodoListView';

function App() {
  const date = new Date();
  const year = `${date.getFullYear()}`;

  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    axios.get(API_GET_TODO_URL).then(res => setTodoList(res.data))
  });

  const addTodoHandler = () => {
    axios.post(API_POST_TODO_URL, {'title': title, 'description': desc}).then(res => console.log(res))
  };

  return (
    <div className="App list-group-item justify-contenct-center align-items-center mx-auto"
          style={{"width": "400px", "backgroundColor": "white", "marginTop": "15px"}}>
            <h1 className="card text-white bg-primary mb-1 mx-auto" style={{"maxWidth":"20rem"}}>Task Manager</h1>
            <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
            <div className="card-body">
              <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
              <span className="card-text">
                <input type="text" className="mb-2 form-control titleIn" placeholder='Title' onChange={event => setTitle(event.target.value)}/>
                <input type="text" className="mb-2 form-control desIn" placeholder='Description' onChange={event => setDesc(event.target.value)}/>
                <button className="btn btn-outline-primary mx-2 mb-3" style={{"borderRadius":"50px", "fontWeight": "bold"}} onClick={addTodoHandler}>Add Task</button>
              </span>
              <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
              <div><TodoView todoList={todoList} /></div>
              <h6 className="card text-dark bg-warning py-1 mb-0">Copyright {year}, All rights reserved &copy;</h6>
            </div>
    </div>
  );
}

export default App;
