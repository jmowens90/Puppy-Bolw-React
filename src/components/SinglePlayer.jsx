
const SinglePlayer = ({singlePlayerDetails, setShowPlayerDetails}) => {

    return (
        <>
        <div className="singleCard">
            <h1> Puppy Details </h1>
            <h3>{singlePlayerDetails.name}</h3>
            <img src={singlePlayerDetails.imageUrl} />
            <button onClick={() => setShowPlayerDetails(false)}> Go Back</button>
        </div>
        </>
    )
}

export default SinglePlayer;