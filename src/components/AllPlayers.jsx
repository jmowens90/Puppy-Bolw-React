import {useEffect, useState} from "react";

const AllPlayers = ({setShowPlayerDetails, setSinglePlayerDetails}) => {
    const [allPlayersList, setAllPlayersList] = useState([]);
    const [error, setError] = useState(null);
    //have to do useEffect in order to get API
    useEffect(() => {
        const getPlayers = async() => {
            try{
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);
            const responseJson = await response.json();
            const allPlayers = responseJson.data.players;
            setAllPlayersList(allPlayers);
            } catch (error) {
                setError(error.message);
            }
        }
        getPlayers();
    }, []);


    return (
        <>
        <h2> Puppy Roster </h2>
        <div className="cardList">
        {allPlayersList.map((singlePlayer) => {
                return (
                    <div className="card" onClick={() => {setShowPlayerDetails(true); setSinglePlayerDetails(singlePlayer)}}key={singlePlayer.id}>
                        <h3>{singlePlayer.name}</h3>
                        <img src={singlePlayer.imageUrl} />
                    </div>
                )
        })}
        </div>
        </>
    )
}

export default AllPlayers