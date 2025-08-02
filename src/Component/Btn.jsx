import React from 'react'

const Btn = ({val,handleClick}) => {
  return (
    <button
    style={{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        padding:"5px",
        height:"70px",
        width:"70px",
        border:"1px solid gray",
        borderRadius:"5px",
        cursor:"pointer"
    }}
    onClick={()=>handleClick(val)}
    >{val}
    
    </button>
  )
}

export default Btn