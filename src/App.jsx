import { useState, useEffect } from "react";
import axios from "axios";
import DataRows from "./components/DataRows";

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

////Atsisiunčiami visi įrašai////

  return (
    <>
    <div className="antraste">
      <h1>Skrydžių atvykimo tvarkaraštis</h1>
    </div>
    <div className="container">
      <div className="heading"><p>Laikas</p></div>
      <div className="heading"><p>Išvykimo miestas</p></div>
      <div className="heading"><p>Skrydžio nr.</p></div>
      <div className="heading"><p>Būsena</p></div>
      <div className="heading"><p>Oro bendrovė, km</p></div>
      {visiSkrydziai.map( item => <DataRows key={item.id} item={item}/>)}
    </div>
    </>
  );
}

export default App;
