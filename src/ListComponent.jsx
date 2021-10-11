import React from "react";
import { EachRow } from "./EachRow";
import { List } from 'antd';


export const ListComponent = ({ listData, deleteHandler }) => {
    console.log(listData);
    return (
        <>
            <List
                style={{
                    marginTop: '20px',
                    width: '60%'
                }}
            size="large"
            header={<div>Todo List</div>}
            bordered
            dataSource={listData}
            renderItem={item => <EachRow data={item} key={item.id} deleteHandler={deleteHandler} />}
            />
            
        </>
    )
}