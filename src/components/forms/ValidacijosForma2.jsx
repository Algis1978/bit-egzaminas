export default function ValidacijosForma2 ( {validacijosForma2On, validacijosForma2OnControl, validacija2} ) {

    return (
    <div className="validacija2" style={{display: validacijosForma2On?"block":"none"}}>
        <div className="alert-box">
            <p>Įspėjimas: <span>{validacija2}</span></p>
            <div className="alert-buttons">
                <button className="yellow-button" onClick={()=>validacijosForma2OnControl(false)}>Uždaryti</button>
            </div>
        </div>
    </div>
    )
}