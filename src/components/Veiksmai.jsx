import {useState} from "react"
export default function Veiksmai ( {skrydziuSkaicius, laikuSkrydziai} ) {
    
    return (
        <div className="ivedimas">
            <div className="daugiau-veiksmu">

                <div className="data">
                    <h2>Statistika:</h2>
                    <p>Viso skrydžių: <span>{skrydziuSkaicius.visi_skrydziai}</span> vnt</p>
                </div>
            </div>
        </div>
    )
}