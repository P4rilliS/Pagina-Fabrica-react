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
      <div className="logoynombre">
        <img src="./logo.png" alt="Logo" />
        {/* <h1>Corporación Sueño De Angel, C.A</h1> */}
      </div>
      <div className='container'>
        {colchonesList}
      </div>
      <ShowHide />  
    </div>
  );  

}

export default App
