import './App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';

function App() {
  const [name,setName]= useState("")
  const [list,setList]= useState([])

  const submitData=(e)=>{
    e.preventDefault()
    const newItem = {
      id: uuidv4(),
      title: name
    }
    setList([...list,newItem])
    setName('')
  }

  return (
    <section className='container'>
      <h1>ToDoList</h1>
      <form className='form-group' onSubmit={submitData}>
        <div className="form-control">
          <input type='text' className='text-input' 
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
          <button type='submit' className='submit-btn'>Add</button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data,index)=>{
          return <List key={index} {...data}/>
        })}
      </section>
    </section>
  );
}

export default App;
