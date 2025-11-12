import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  // const apiActresses = 'https://lanciweb.github.io/demo/api/actresses/'
  const apiActors = 'https://lanciweb.github.io/demo/api/actors/'
  const [actors, setActors] = useState([])

  function handleClick() {
    axios.get(apiActors)
      .then(response => {
        console.log(response.data);

      })
  }


  return (
    <>
      <div className="container">

        <h1>Most popular actors</h1>

        <button className="btn btn-dark" onClick={handleClick} >clicl me</button>

        <ul>
          <li>

          </li>
        </ul>

      </div>

    </>
  )
}

export default App


