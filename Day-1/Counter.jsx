import { useState,useEffect } from 'react' 
 export  function Counter() {
   const [count,setCount] =useState(0);
   useEffect(() =>{
     document.title=count;
   },[count] )
  return(
    <div>
     <h1>{count}</h1>
     <button onClick={ ()=> setCount(count+1)}>+ </button>
     <button onClick={ ()=> setCount(count-1)}>- </button>
     <button onClick={ ()=> setCount(0) }>Reset </button>
     </div>
  )
}
