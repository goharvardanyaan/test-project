import  {useEffect} from 'react';


function MyButton({title, handleClick}){
   useEffect(()=>{
    let interval = setInterval(()=>{
        console.log('ok')
    },1000)

    return()=>{
        clearInterval(interval)
    }
   },[])
   return(
   <button onClick={handleClick}> {title}</button>
   )
}



export default MyButton;