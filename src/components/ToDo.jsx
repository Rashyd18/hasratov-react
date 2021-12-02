import React, { useEffect, useState } from 'react';
import { Button, Card, Checkbox, Divider } from "antd";
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';

export const ToDo = ({handleRemoveAllCheckedItems}) => {

    const [todos, setTodos] = useState([
        {id: 1, title: "First", description: "first description", checked: false},
        {id: 2, title: "Second", description: "second description", checked: false},
    ]);

    const [idCount, setIdCount] = useState(10);

    const [uncheckedItemsCounter, setUncheckedItemsCounter] = useState(0);
    const calculateUncheckedItemsQunatity = () => {
        let quantity = 0;
        for (let i = 0; i < todos.length; i++) {
            if (!todos[i].checked) {
                quantity++;
            }
        }
        setUncheckedItemsCounter(quantity);
        return <span>{uncheckedItemsCounter || 0}</span>;
    }
    useEffect(() => {
        calculateUncheckedItemsQunatity()
    }, [todos]);

    const handleCheck = (id) => {
        const index = todos.findIndex(item => item.id === id);
        if (index !== -1) {
            const item = todos[index];
            item.checked = !item.checked;
            todos.splice(index, 1, item);
            setTodos([...todos]);
        }
    }

    const handleRemove = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };
    
    const removeAllCheckedItems = () => {
        setTodos(todos.filter(item => !item.checked));
    }

    const handleSubmit = (title, description) => {
        const newItem = {
            id: idCount,
            title,
            description,
            checked: false
        };
        setTodos([...todos, newItem]);
        setIdCount(idCount + 1);
    }

    const renderToDoItems = (todos) => {
        const items = todos.map((todo) => <ToDoItem key={todo.id} item={todo} handleRemove={handleRemove} handleCheck={handleCheck}/>);
        return <ul className="todo=list">{items}</ul>;
    };


    return (
        <Card title={'My todos'}>
            {`Quantity of unchecked todos: ${uncheckedItemsCounter}`}
            <Divider/>
            <ToDoForm handleSubmit={handleSubmit} handleRemoveAllCheckedItems={removeAllCheckedItems}/>
            <Divider/>
            {renderToDoItems(todos)}
        </Card>
    );
};