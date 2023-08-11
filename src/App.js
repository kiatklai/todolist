import './App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [name,setName]= useState("")
  const [list,setList]= useState([])
  const [alert,setAlert] = useState({show:false,msg:'',type:''})

  const submitData=(e)=>{
    e.preventDefault()
    if(!name){
      setAlert({show:true,msg:"Please insert anything",type:"error"})
    }else {
      const newItem = {
        id: uuidv4(),
        title: name
      }
      setList([...list,newItem])
      setName('')
      setAlert({show:true,msg:"投稿済み",type:"success"})
    }
  }

  const removeItem=(id)=>{
    const result= list.filter((item)=>item.id !== id)    
    setList(result)
    setAlert({show:true,msg:"削除済み",type:"error"})
  }

  return (
    <section className='container'>
      <h1>ToDoList</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
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
          return <List key={index} {...data} removeItem={removeItem}/>
        })}
      </section>
    </section>
  );
}

export default App;
