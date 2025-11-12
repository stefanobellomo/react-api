export default function Card({ everyActor }) {
    return (
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
    )
}