import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  // const apiActresses = 'https://lanciweb.github.io/demo/api/actresses/'
  const apiActors = 'https://lanciweb.github.io/demo/api/actors/'
  const [actors, setActors] = useState([])

  useEffect(handleClick, [])

  // useEffect(() => { 
  //   handleClick() 
  // }, [])

  function handleClick() {
    axios.get(apiActors)
      .then(response => {
        console.log(response.data);
        setActors(response.data)
      })
  }

  console.log(actors);



  return (
    <>
      <div className="container">

        <h1>Most popular actors</h1>

        <button className="btn btn-dark" onClick={handleClick}>click me</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {actors.map(actor => (
            <div key={actor.id} className="col">
              <div className="actorsCard">
                <img src={actor.image} alt={actor.name} />
                <h4>{actor.name}</h4>
                <p className="d-flex flex-column">
                  {/* anno nascita ed eventualmente di morte */}
                  <span>Birth Year: {actor.birth_year} {actor.death_year ? `Death Year: ${actor.death_year}` : ''}</span>
                  {/* nazionalità */}
                  <span>{actor.nationality}</span>
                  {/* biografia */}
                  <span>{actor.biography}</span>
                  {/* riconoscimenti */}
                  <span>{actor.know_for}</span>
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


