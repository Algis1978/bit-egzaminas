import {useState} from "react"
import ValidacijosForma2 from "./ValidacijosForma2"
let validacija2=""
export default function IvedimoForma ( {ivedimoFormaOn, ivedimoFormaOnControl, sukurti}) {
    const [validacijosForma2On, setValidacijosForma2On] = useState (false)
    const validacijosForma2OnControl = (raktas) => {
        setValidacijosForma2On(false)
        if (raktas) {
            setValidacijosForma2On(true)
        }
    }
    const [naujasIrasas, setNaujasIrasas] = useState( {
        registration_code: "",
        is_busy: 0,
        last_use_time: "",
        total_ride_kilometers: "",
        model: "",
        photo: ""
    } )
    //Toliau komponente pasirašoma kontrolės funkcija,
    //nes kažkodėl objekto atveju React reikalinga jo kopija/
    const formControl = (e, savybe) => {
        console.log(e, savybe)
        const naujasIrasasCopy = {...naujasIrasas};
        if (savybe == "last_use_time") {naujasIrasasCopy[savybe] = e.target.value.slice(0,20)} else {naujasIrasasCopy[savybe] = e.target.value};
        setNaujasIrasas (naujasIrasasCopy);
    }
    const handleSukurti = () => {
        if (naujasIrasas.total_ride_kilometers<0) {
            validacijosForma2OnControl(true)
            validacija2 = "rida negali būti neigiama."
        } else if (naujasIrasas.total_ride_kilometers==="") {
            validacijosForma2OnControl(true)
            validacija2 = "rida yra būtina."
        } else if (naujasIrasas.registration_code==="") {
            validacijosForma2OnControl(true)
            validacija2 = "registracijos numeris yra būtinas."
        } else if ( !(naujasIrasas.registration_code.length==8) ) {
            validacijosForma2OnControl(true)
            validacija2 = "registracijos numeris turi būti iš 8 simbolių."
        } else if ( naujasIrasas.model.length>45 ) {
            validacijosForma2OnControl(true)
            validacija2 = "modelio pavadinimas turi būti ne ilgesnis nei iš 45 simbolių."
        } else if (naujasIrasas.last_use_time==="") {
            validacijosForma2OnControl(true)
            validacija2 = "data yra būtina."
        } else {
            sukurti(naujasIrasas)
            setNaujasIrasas ({
                registration_code: "",
                is_busy: 0,
                last_use_time: "",
                total_ride_kilometers: "",
                model: "",
                photo: ""
            })
            validacijosForma2OnControl(false)
        }
    }
    // const handleSukurti = () => {
    
    //     sukurti(naujasIrasas)
    //     setNaujasIrasas ({
    //         registration_code: "",
    //         is_busy: 0,
    //         last_use_time: "",
    //         total_ride_kilometers: "",
    //         model: "",
    //         photo: ""
    //     })
    // }
    
    return (
        <div className="ivedimas" style={{display: ivedimoFormaOn?"grid":"none"}}>
            <div className="data">
                <div className="cell"><input type="text" placeholder="Modelis" value={naujasIrasas.model} onChange={(e) => formControl(e, "model")}/></div>
                <div className="cell"><input type="text" placeholder="Registracijos nr." value={naujasIrasas.registration_code} onChange={(e) => formControl(e, "registration_code")}/></div>
                <div className="cell"><textarea placeholder="Nuoroda į nuotrauką" value={naujasIrasas.photo} onChange={(e) => formControl(e, "photo")}></textarea></div>
                <div className="cell"><input type="date" title="Įvedimo data" value={naujasIrasas.last_use_time} onChange={(e) => formControl(e, "last_use_time")}/></div>
                <div className="cell"><input type="number" placeholder="Rida, km" title="Rida, km" value={naujasIrasas.total_ride_kilometers} onChange={(e) => formControl(e, "total_ride_kilometers")}/ ></div>
            </div>
            <div className="buttonsDiv">
                <div className="cell"><button className="yellow-button" title="Paspauskite įrašo įvedimui" onClick= {handleSukurti}>Įveskite</button><button className="green-button" onClick={()=>{ivedimoFormaOnControl(false)}} title="Uždarykite">&#8657;</button></div>
            </div>
            <ValidacijosForma2 validacijosForma2On={validacijosForma2On} validacijosForma2OnControl={validacijosForma2OnControl} validacija2={validacija2}></ValidacijosForma2>
        </div>
    )
}
