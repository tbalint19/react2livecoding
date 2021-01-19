import './App.css';
import { useState, useEffect } from 'react'
import CounterOne from './components/CounterOne'

const App = () => {

  const [ x, setX ] = useState("Bela")
  const [ y, setY ] = useState(0)

  const [ filterParam, setFilterParam ] = useState(0)

  const [ myList, setMyList ] = useState([
    { name: "lajos", age: 20 },
    { name: "bela", age: 25 },
    { name: "kazmer", age: 30 },
    { name: "otto", age: 35 },
  ])

  useEffect(() => {
    document.title = x
    console.log("runs")
  })

  return (
    <div className="App">

      {
        myList
          .filter(person => person.age > filterParam)
          .map(person => <p>{ person.name }</p>)
      }

      <input type="number" onChange={(e) => setFilterParam(e.target.value)}/>

      <h1 className="my-heading">My Heading</h1>
      <p>Lorem</p>
      { x.length < 10 && <h1>Too short!</h1> }
      <p>Lorem</p>
      <p>{ x }</p>
      <p>{ y }</p>
      { y > 10 && <p>Bigger</p> }
      { y < 10 && <p>Smaller</p> }
      { y < 20 ? <p>Smaller than 20</p> : <p>Not smaller than 20</p> }
      <div>
        <input placeholder="username" onChange={(e) => setX(e.target.value)}/>
        <input placeholder="password" />
        <CounterOne data={y} myFunc={() => setY(y + 1)}/>
        <button onClick={() => setY(y + 1)}>Counter1 ({ y })</button>
        <button onClick={() => setY(y + 1)}>Counter2 ({ y })</button>
      </div>
    </div>
  );
}

export default App;
