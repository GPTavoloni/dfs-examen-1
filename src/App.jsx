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

  
  const onGol = (equipo) => {
	  equipo == "local" ? setPartido({ ...partido, golesLocal: partido.golesLocal + 1 }) : setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 });
  }
  const tarjetaAmarilla = (equipo) => {
	  equipo == "local" ? setTarjetasAmarillas({ ...tarjetasAmarillas, local: tarjetasAmarillas.local + 1 }) : setTarjetasAmarillas({ ...tarjetasAmarillas, visitante: tarjetasAmarillas.visitante + 1 });
  
  }
  
  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} tarjetaAmarilla={tarjetaAmarilla} />
      <Display partido={partido} tarjetasAmarillas={tarjetasAmarillas}/>
    </div>
  )
}

export default App
