import './App.css'
import Card from './components/Card'
import ShowHide from './components/ShowHide'
import colchones from './data/colchones'

function App() {
  const colchonesList = colchones.map((c, index) => {
    return <Card key= {index} title={c.name} description={c.description} image={c.image} price={c.price}/>
  })
  
  return ( 
    <div className="App">
      <h1>Corporacion sueño De Angel, C.A</h1>
      <div className='container'>
        {colchonesList}
      </div>
      <ShowHide />  
    </div>
  );  

}

export default App
