import { useEffect } from "react"
import Row from "./Row"
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
            <Row everyActors={everyActors} />
        </div>

    )
}