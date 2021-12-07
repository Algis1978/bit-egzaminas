
export default function IstrintiForma ( {item, istrintiFormaOn, istrintiFormaOnControl, istrinti} ) {
    const handleIstrinti = () => {
        istrinti(item.id)
        istrintiFormaOnControl(false)
    }

    return (
    <div className="istrinti-forma" style={{display: istrintiFormaOn?"block":"none"}}>
        <div className="alert-box">
            <p>Ar jūs tikrai norite ištrinti šį įrašą</p>
            <h1>?</h1>
            <div className="alert-buttons">
                <button className="green-button" onClick={handleIstrinti}>TAIP</button>
                <button className="yellow-button" onClick={()=>istrintiFormaOnControl(false)}>Uždaryti</button>
            </div>
        </div>
    </div>
    )
}