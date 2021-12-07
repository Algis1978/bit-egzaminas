
export default function ValidacijosForma1 ( {validacijosForma1On, validacijosForma1OnControl, validacija1} ) {

    return (
    <div className="istrinti-forma" style={{display: validacijosForma1On?"block":"none"}}>
        <div className="alert-box">
            <p>Įspėjimas: <span>{validacija1}</span></p>
            <div className="alert-buttons">
                <button className="yellow-button" onClick={()=>validacijosForma1OnControl(false)}>Uždaryti</button>
            </div>
        </div>
    </div>
    )
}