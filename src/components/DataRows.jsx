import { useState } from "react"
import IstrintiForma from "./IstrintiForma"
export default function DataRows ( {item, istrinti, pakeisti}) {
    let statusas
    if (item.is_late == 0) {statusas="Laiku"}
    else {statusas="Vėluoja"}

    console.log (item.arrival_time)
    console.log (item.arrival_time.slice(0, 10)+" "+item.arrival_time.slice(11, 16))
    let dataItem = item.arrival_time.slice(0, 10)+" "+item.arrival_time.slice(11, 16)


    const [pradiniaiDuomenys, setPradiniaiDuomenys]= useState({ 
        is_late: item.is_late,  
        arrival_time: dataItem
    })

    const [redaguojamiDuomenys, setRedaguojamiDuomenys] = useState({
        id: item.id,  
        is_late: item.is_late,  
        arrival_time: item.arrival_time 
    })

    const formControl = (e, savybe) => {
        const pradiniaiDuomenysCopy = {...pradiniaiDuomenys}
        const redaguojamiDuomenysCopy = {...redaguojamiDuomenys}

        if (savybe == "is_late") {redaguojamiDuomenysCopy[savybe] = e.target.checked; pradiniaiDuomenysCopy[savybe] = e.target.checked}
        if (savybe == "arrival_time") {redaguojamiDuomenysCopy[savybe] = e.target.value; pradiniaiDuomenysCopy[savybe] = e.target.value}
        setPradiniaiDuomenys({ 
            is_late: pradiniaiDuomenysCopy.is_late, 
            arrival_time: pradiniaiDuomenysCopy.arrival_time
        })
        setRedaguojamiDuomenys({
            id: item.id,  
            is_late: redaguojamiDuomenysCopy.is_late,  
            arrival_time: redaguojamiDuomenysCopy.arrival_time 
        })
        console.log(redaguojamiDuomenysCopy.arrival_time)
    }

    const redaguoti = () => {
        pakeisti(redaguojamiDuomenys, redaguojamiDuomenys.id)
    }
    const [istrintiFormaOn, setIstrintiFormaOn] = useState (false)
    const istrintiFormaOnControl = (raktas) => {
            setIstrintiFormaOn(false)
        if (raktas) {
            setIstrintiFormaOn(true)
        }
    }
return (
    <>
    <div className="cell ">{dataItem}</div>
    <div className="cell">{item.from_town}</div>
    <div className="cell">{item.skrydzio_nr}</div>
    <div className="cell" style={{color: item.is_late?"yellow":"lightgreen"}}>{statusas}</div>
    <div className="cell">{item.airline}</div>

    
    <div className="cell"><button className="red-button" title="Ištrinkite įrašą" onClick={() => {istrintiFormaOnControl(true)}}>Ištrinti</button></div>
    <IstrintiForma item={item} istrinti={istrinti} istrintiFormaOn={istrintiFormaOn} istrintiFormaOnControl={istrintiFormaOnControl}></IstrintiForma>
    <div className="cell edit-cell" title="Naujas atvykimo laikas" ><input type="datetime-local" value={pradiniaiDuomenys.arrival_time} onChange={(e) => formControl(e, "arrival_time")}></input></div>
    <div className="cell edit-cell"></div>
    <div className="cell edit-cell"></div>
    <div className="cell edit-cell"><div className="check"><input type="checkbox" checked={pradiniaiDuomenys.is_late} onChange={(e)=>formControl(e, "is_late")}></input>
    <label title="Būsena">Vėluoja?</label></div></div>


    <div className="cell edit-cell" ></div>
            
    <div className="cell edit-cell"><button className="yellow-button" title="Įveskite naujus duomenis" onClick={redaguoti}>Redaguoti</button></div>

    </>
)
}