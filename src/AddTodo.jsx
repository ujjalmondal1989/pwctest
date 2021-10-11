import React, { useState } from "react";
import { Input, Space, Button } from 'antd';

export const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');
    return (
        <>
            <Space direction="vertical" style={{marginTop: '10px'}}>
                <Input
                    placeholder="Add some todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <Button type="primary" size="middle" onClick={() =>addTodo(todo)}>
                Add
                </Button>
            </Space>
        </>
    )
}