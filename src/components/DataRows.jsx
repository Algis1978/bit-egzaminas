export default function DataRows ( {item}) {
    let statusas
    if (item.is_late == 0) {statusas="Laiku"}
    else {statusas="Vėluoja"}
return (
    <>
    <div className="cell "><p>{item.arrival_time}</p></div>
    <div className="cell"><p>{item.from_town}</p></div>
    <div className="cell"><p>{item.skrydzio_nr}</p></div>
    <div className="cell"><p>{statusas}</p></div>
    <div className="cell"><p>{item.airline}</p></div>
    <div className="cell"><button className="green-button" title="Paspauskite įrašo redagavimui">&#8681;</button><button className="red-button" title="Įrašo trynimo mygtukas">X</button></div>
    </>
)
}