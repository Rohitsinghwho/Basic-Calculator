import React, {  useState } from 'react'
import Btn from './Component/Btn'

const App = () => {
  
  const [expression,setExpression]=useState('');
  const [output,setOutput]=useState('');



  const handleClick=(val)=>{
    if(val==='C'){
      setExpression('');
      setOutput('')
      return;
    }
    else if(val==='='){
      if(expression===''){
        setOutput('Error');
        return;
      }
      try {
        const result=Function(`return ${expression}`)();
        setOutput(result);
      } catch (error) {
        setOutput('Error');
      }
    }
    else{
      setExpression((prev)=>prev+val);
    }
  }

  return (
    <div
    style={{
      display:"flex",
      flexDirection:"column",
      gap:"10px",
      alignItems:"center",
      justifyContent:"center"
    }}
    >
        <h1>React Calculator</h1>
        <input type='text' value={expression} onChange={(e)=>setExpression(e.target.value)}/>
        {output&&
        <div style={{color:"grey"}}>{output}</div>
        }
        <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"10px",
          justifyContent:"center",
          alignItems:"center"
        }}  
        >
          {[
            [7,8,9,'+'],
            [4,5,6,'-'],
            [1,2,3,'*'],
            ['C',0,'=','/'],
          ].map((row,i)=>(
            <div
            key={i}
            style={{
              display:"flex",
              gap:"10px",
              alignItems:"center",
              justifyContent:"center"
            }}
            >
              {row.map((val)=>(
                <Btn key={val} val={val} handleClick={handleClick}/>
              ))}
          </div>
          ))}
          </div>
    </div>
  )
}

export default App