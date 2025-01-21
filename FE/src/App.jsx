import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  const fetchApi = async () => {
    const response = await axios.get('http://localhost:8080/api/users')
    console.log(response.data.users)
    setUsers(response.data.users)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {users.map((user, index) => (
              <div key={index}>{user}</div>
            ))}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
