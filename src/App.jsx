import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0
  })
  const [tarjetasAmarillas, setTarjetasAmarillas] = useState({
    local: 0,
    visitante: 0
  })
  const [tarjetasRojas, setTarjetasRojas] = useState({
    local: 0,
    visitante: 0
  })

  
  const onGol = (equipo) => {
	  equipo == "local" ? setPartido({ ...partido, golesLocal: partido.golesLocal + 1 }) : setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 });
  }
  const tarjetaAmarilla = (equipo) => {
	  equipo == "local" ? setTarjetasAmarillas({ ...tarjetasAmarillas, local: tarjetasAmarillas.local + 1 }) : setTarjetasAmarillas({ ...tarjetasAmarillas, visitante: tarjetasAmarillas.visitante + 1 });
  
  }
  const tarjetaRoja = (equipo) => {
	  equipo == "local" ? setTarjetasRojas({ ...tarjetasRojas, local: tarjetasRojas.local + 1 }) : setTarjetasRojas({ ...tarjetasRojas, visitante: tarjetasRojas.visitante + 1 });
  }
 const resetTodo = ()=>{
	setPartido({...partido,golesLocal:0,golesVisitante:0});
	setTarjetasAmarillas({...tarjetasAmarillas,local:0,visitante:0});
	setTarjetasRojas({...tarjetasRojas,local:0,visitante:0});
 } 
   
  
  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} tarjetaAmarilla={tarjetaAmarilla} tarjetaRoja={tarjetaRoja} resetTodo={resetTodo} />
      <Display partido={partido} tarjetasAmarillas={tarjetasAmarillas} tarjetasRojas={tarjetasRojas}/>
    </div>
  )
}

export default App
