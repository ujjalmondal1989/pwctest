import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {AddTodo} from './AddTodo';
import {ListComponent} from './ListComponent';


function App() {
  const [mainState, setMainState] = useState([]);
  const [loader, setLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const addTodoHanlder = (todo) => {
    setLoader(true);
    setTimeout(() => {
      const tempState = [ ...mainState ];
      tempState.push({ todo, id: uuidv4() });
      setMainState(tempState);
      setLoader(false);
    }, 2000);
  }

  const deleteHandler = (id) => {
    setDeleteLoader(true);
    setTimeout(() => {
      const restMainState = mainState.filter((item) => item.id !== id);
      setMainState(restMainState);
      setDeleteLoader(false);
    }, 2000);
  }
  return (
    <div className="App" style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <AddTodo addTodo={addTodoHanlder} /> {loader && 'Adding ...'}
      {deleteLoader && 'Deleting ...'}
      <ListComponent listData={mainState} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
