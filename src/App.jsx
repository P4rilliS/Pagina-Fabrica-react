import './App.css'
import Card from './components/Card'
import colchones from './data/colchones'

function App() {
  const colchonesList = colchones.map(c => {
    return <Card title={c.name} description={c.description}/>
  })
  
  return ( 
    <div className="App">
      <h1>Corporacion sueño De Angel, C.A</h1>
      <div className='container'>
        {colchonesList}
      </div>
    </div>
  );  

}

export default App
