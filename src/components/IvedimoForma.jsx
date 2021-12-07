import {useState} from "react"
export default function IvedimoForma ( {sukurti}) {

    const [skrydis, setSkrydis] = useState( {
        from_town: "",
        airline: "",
        arrival_time: "",
        is_late: 0,
        skrydzio_nr: ""
    } )
    //Toliau komponente pasirašoma kontrolės funkcija,
    //nes kažkodėl objekto atveju React reikalinga jo kopija/
    const formControl = (e, savybe) => {
        const skrydisCopy = {...skrydis};
        skrydisCopy[savybe] = e.target.value;
        setSkrydis (skrydisCopy);
    }
    //Toliau komponente pasirašoma funkcija, kuri 
    //vykdys veiksmus onClick atveju//
    const handleSukurti = () => {
        sukurti(skrydis)
        setSkrydis ({
            from_town: "",
            airline: "",
            arrival_time: "",
            is_late: 0,
            skrydzio_nr: ""
        })
    }

    return (
        <div className="container ivedimas">
            <div className="cell"><input type="text" placeholder="Išvykimo miestas" value={skrydis.from_town} onChange={(e) => formControl(e, "from_town")}/></div>

            <div className="cell"><input type="text" placeholder="Oro bendrovė" value={skrydis.airline} onChange={(e) => formControl(e, "airline")}/></div>

            <div className="cell"><input type="datetime-local" placeholder="Atvykimo data" value={skrydis.arrival_time} onChange={(e) => formControl(e, "arrival_time")}/></div>

            <div className="cell"><input type="text" placeholder="Skrydžio nr." value={skrydis.skrydzio_nr} onChange={(e) => formControl(e, "skrydzio_nr")}/></div>

            <div className="cell"><button className="yellow-button" title="Paspauskite įrašo įvedimui" onClick= {handleSukurti}>Įveskite</button></div>
        </div>
    )
}
