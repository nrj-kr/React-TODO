import React from 'react';
import Todo from './todo';

export default function todoList({todos,setTodos,filteredTodos}) {
    console.log(todos);
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map( todo =>(
                <Todo
                todos={todos}
                setTodos={setTodos }
                key={todo.id}
                todo={todo}
                text={todo.text}/>
            ))}
        </ul>
        </div>
    );
};
