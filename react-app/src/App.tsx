import './App.css'
import Card from './components/Card'
import data from './users.json'

function App() {
  return (<>
    <main>
      <h1>React + TS</h1>
      {data.map(
        (element) => (
          <Card
            name={element.nombre}
            age={element.edad}
            email={element.email}
            phone={element.telefono}
            direction={element.direccion}
            ocupation={element.ocupacion}
            date={element.fecha_registro}
          />
        )
      )}
    </main>
  </>)
}

export default App