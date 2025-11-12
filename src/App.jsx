import Main from "./components/Main"
import { useState } from "react"

function App() {

  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])
  const [everyActors, setEveryActors] = useState([])

  return (
    <>
      <Main actors={actors} actresses={actresses} everyActors={everyActors} setActors={setActors} setActresses={setActresses} setEveryActors={setEveryActors} />
    </>
  )
}

export default App