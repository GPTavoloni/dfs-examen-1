const Display = ({ partido ,tarjetasAmarillas, tarjetasRojas}) => {
  return (
    <div className="display">    
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Local</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">⚽</th>
            <td>{partido.golesLocal}</td>
            <td>{partido.golesVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟨</th>
            <td>{tarjetasAmarillas.local}</td>
            <td>{tarjetasAmarillas.visitante}</td>
          </tr>
          <tr>
            <th scope="row">🟥</th>
            <td>{tarjetasRojas.local}</td>
            <td>{tarjetasRojas.visitante}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Display