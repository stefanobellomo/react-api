import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const apiActresses = 'https://lanciweb.github.io/demo/api/actresses/'
  const apiActors = 'https://lanciweb.github.io/demo/api/actors/'
  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])
  const [everyActors, setEveryActors] = useState([])

  useEffect(handleClick, [])

  function handleClick() {
    axios.get(apiActors)
      .then(response => {
        console.log(response.data);
        setActors(response.data)
      })
    axios.get(apiActresses)
      .then(response => {
        console.log(response.data);
        setActresses(response.data)
      })
    const newListActors = [...actors, ...actresses]
    setEveryActors(newListActors)
  }

  console.log(everyActors);

  return (
    <>
      <div className="container">

        <h1>Most popular actors</h1>

        <button className="btn btn-dark" onClick={handleClick}>click me</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

          {everyActors.map(everyActor => (
            <div key={everyActor.id} className="col">
              <div className="everyActorsCard">
                <img src={everyActor.image} alt={everyActor.name} />
                <h4>{everyActor.name}</h4>
                <p className="d-flex flex-column">
                  {/* anno nascita ed eventualmente di morte */}
                  <span>Birth Year: {everyActor.birth_year} {everyActor.death_year ? `Death Year: ${everyActor.death_year}` : ''}</span>
                  {/* nazionalità */}
                  <span>{everyActor.nationality}</span>
                  {/* biografia */}
                  <span>{everyActor.biography}</span>
                  {/* riconoscimenti */}
                  {/* <span>Awards: {everyActor.awards.join(', ')}</span> */}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </>
  )
}

export default App


