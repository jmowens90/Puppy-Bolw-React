import AllPlayers from "./components/AllPlayers"
import SinglePlayer from "./components/SinglePlayer";
import { useState } from "react"

function App() {
  const [showPlayerDetails, setShowPlayerDetails] = useState(false);
  const [singlePlayerDetails, setSinglePlayerDetails] = useState('');
  

  return (
    <>
      <h1> Puppy Bowl </h1>
      <form>
        <input id="search" type="text" />
        <button> Search </button>
      </form>
      {
        showPlayerDetails ? <SinglePlayer singlePlayerDetails={singlePlayerDetails} setShowPlayerDetails={setShowPlayerDetails}/> : <AllPlayers setShowPlayerDetails={setShowPlayerDetails} setSinglePlayerDetails={setSinglePlayerDetails} />
      }
    </>
  )
}

export default App
