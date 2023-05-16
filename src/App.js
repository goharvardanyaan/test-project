import {useEffect,useState} from 'react'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users').then(res=>res.json()).then(setUsers)
  }, []);
  
  useEffect(()=>{
////////////////
  },[])

  return (
    <div>
     
      {
        users.map(item=><div key={item.id}>
          <p>{item.id}</p>
          <img src={item.avatar_url}  style={{width: 200 + 'px', height: 200 + 'px'}}/>
          </div>)
      }
    </div>
  );
}

export default App;