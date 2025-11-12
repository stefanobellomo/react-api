import Card from "./Card"

export default function Row({ everyActors }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

            {everyActors.map((everyActor, index) => (
                <div key={index} className="col">
                    <Card everyActor={everyActor} />
                </div>
            ))}

        </div>
    )
}