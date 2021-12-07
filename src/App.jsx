import { useState, useEffect } from "react";
import axios from "axios";
import DataRows from "./components/DataRows";
import DataHeaders from "./components/DataHeaders";
import IvedimoForma from "./components/IvedimoForma";

function App() {
  ////Atsisiunčiami visi įrašai////
  const [visiSkrydziai, setVisiSkrydziai] = useState ([]);
  const [atnaujinti, setAtnaujinti] = useState(Date.now())
  useEffect( () => {
    axios.get('http://localhost:3012/planes')
    .then (res => {
        setVisiSkrydziai(res.data);
        console.log(res.data)
    })
}, [atnaujinti])
console.log(visiSkrydziai)
//Naujas įrašas
const sukurti = skrydis => {
  axios.post('http://localhost:3012/planes', skrydis)
  .then (res => {
  setAtnaujinti(Date.now());
  }) 
}
///Redagavimo funkcijos susikūrimas///
const pakeisti = (keiciamiDuomenys, id) => {
  axios.put('http://localhost:3012/planes'+id, keiciamiDuomenys)
  .then (res => {
  setAtnaujinti(Date.now());
   })
  }
  ///Trynimo funkcijos susikūrimas///
  const istrinti = (id) => {
    axios.delete('http://localhost:3012/planes'+id)
    .then (res => {
    setAtnaujinti(Date.now());
     })
    }

  return (
    <>
    <div className="antraste">
      <h1>Skrydžių atvykimo tvarkaraštis</h1>
    </div>
    <IvedimoForma sukurti={sukurti}></IvedimoForma>
    <div className="container">
      <DataHeaders/>
      {visiSkrydziai.map( item => <DataRows key={item.id} item={item} pakeisti={pakeisti} istrinti={istrinti}/>)}
    </div>
    </>
  );
}

export default App;
