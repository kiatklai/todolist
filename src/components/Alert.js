const Alert=({msg,type})=>{
  return(
    <p className={`alert ${type}`}>{msg}</p>
  )
}

export default Alert