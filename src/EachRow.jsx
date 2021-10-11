import React from "react";
import { Button, List } from 'antd';

export const EachRow = ({ data, deleteHandler }) => {
    console.log(data);
    return (
        <>
            <List.Item style={{
                display: 'flex',
                    justifyContent: 'space-between' }}>{data.todo}<Button type="primary" shape="circle" onClick={() => deleteHandler(data.id)}>
      X
            </Button>
            </List.Item>

        </>
    )
}