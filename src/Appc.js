import style from './App.module.css';
import CounterOne from './components/CounterOne'
import React from 'react'

class Appc extends React.Component {
  constructor() {
    super()
    this.state = {
      x: 'Bela',
      y: 0,
      filterParam: 0,
      myList: [
        { name: "lajos", age: 20 },
        { name: "bela", age: 25 },
        { name: "kazmer", age: 30 },
        { name: "otto", age: 35 },
      ]
    }
  }

  setX(value) {
    this.setState({ ...this.state, x: value})
  }

  setY(value) {
    this.setState({ ...this.state, y: value})
  }

  setFilterParam(value) {
    this.setState({ ...this.state, filterParam: value})
  }

  componentDidMount() {
    console.log("only once");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.x != this.state.x) {
      document.title = this.state.x
      console.log("runs")
    }
  }

  render() {
    return (
      <div className={style.App}>

        {
          this.state.myList
            .filter(person => person.age > this.state.filterParam)
            .map((person, i) => <p key={i}>{ person.name }</p>)
        }

        <input type="number" onChange={(e) => this.setFilterParam(e.target.value)}/>

        <h1 className="my-heading">My Heading</h1>
        <p className={style.someClass}>Lorem</p>
        { this.state.x.length < 10 && <h1>Too short!</h1> }
        <p>Lorem</p>
        <p>{ this.state.x }</p>
        <p>{ this.state.y }</p>
        { this.state.y > 10 && <p>Bigger</p> }
        { this.state.y < 10 && <p>Smaller</p> }
        { this.state.y < 20 ? <p>Smaller than 20</p> : <p>Not smaller than 20</p> }
        <div>
          <input placeholder="username" onChange={(e) => this.setX(e.target.value)}/>
          <input placeholder="password" />
          <CounterOne data={this.state.y} myFunc={() => this.setY(this.state.y + 1)}/>
          <button onClick={() => this.setY(this.state.y + 1)}>Counter1 ({ this.state.y })</button>
          <button onClick={() => this.setY(this.state.y + 1)}>Counter2 ({ this.state.y })</button>
        </div>
      </div>
    );
  }
}

export default Appc;
