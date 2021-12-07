import { useState, useEffect } from "react";
import axios from "axios";
import DataRows from "./components/DataRows";
import DataHeaders from "./components/DataHeaders";
import IvedimoForma from "./components/IvedimoForma";
import Veiksmai from "./components/Veiksmai";

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
///Atsisiunčiama statistika///

const [skrydziuSkaicius, setSkrydziuSkaicius] = useState({})
useEffect( () => {
  axios.get('http://localhost:3012/planes/count=all')
  .then (res => {
      setSkrydziuSkaicius(res.data);
  })
}, [atnaujinti])
const [laikuSkrydziai, setLaikuSkrydziai] = useState({})
useEffect( () => {
  axios.get('http://localhost:3012/planes/laiku')
  .then (res => {
      setLaikuSkrydziai(res.data);
  })
}, [atnaujinti])
  return (
    <>
    <div className="antraste">
      <h1>Skrydžių atvykimo tvarkaraštis</h1>
    </div>
    <IvedimoForma sukurti={sukurti}></IvedimoForma>
    <Veiksmai skrydziuSkaicius={skrydziuSkaicius} laikuSkrydziai={laikuSkrydziai}></Veiksmai>
    <div className="container">
      <DataHeaders/>
      {visiSkrydziai.map( item => <DataRows key={item.id} item={item} pakeisti={pakeisti} istrinti={istrinti}/>)}
    </div>
    </>
  );
}

export default App;
