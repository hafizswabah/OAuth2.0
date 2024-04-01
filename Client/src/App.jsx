
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
function App() {

  function navigate(url) {
    window.location.href = url
  }

  async function handLogin() {
    let data = await axios.post('http://localhost:8888/user/request')
    navigate(data.data.url)
  }

  return (
    <>
      <h1>Login using google accounts</h1>

      <button onClick={handLogin}>Login</button>

    </>
  )
}

export default App
