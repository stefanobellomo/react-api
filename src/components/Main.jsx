import { useEffect } from "react"
import axios from "axios"

export default function Main({ actors, actresses, everyActors, setActors, setActresses, setEveryActors }) {

    const apiActresses = 'https://lanciweb.github.io/demo/api/actresses/'
    const apiActors = 'https://lanciweb.github.io/demo/api/actors/'

    useEffect(handleClick, [])

    function handleClick() {
        axios.get(apiActors)
            .then(response => {
                setActors(response.data)
            })
        axios.get(apiActresses)
            .then(response => {
                setActresses(response.data)
            })
        const newListActors = [...actors, ...actresses]
        setEveryActors(newListActors)
    }

    return (

        <div className="container">

            <h1>Most popular actors</h1>

            <button className="btn btn-dark" onClick={handleClick}>click me</button>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                {everyActors.map((everyActor, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <div className="card-image">
                                <img src={everyActor.image} alt={everyActor.name} />
                            </div>

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

    )
}