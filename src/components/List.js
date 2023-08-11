const List=({id,title,removeItem})=>{
  return(
    <div className="list-item">
      <p className="title">{title}</p>
      <div className="button-container">
        <button>Edit</button>
        <button onClick={()=>removeItem(id)}>Delete</button>
      </div>
    </div>
  )
}

export default List