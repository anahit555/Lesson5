import './App.css';
import React from 'react'

class App extends React.Component {
constructor (){
  super()
  this.state = {
    loadin:false,
    character:{}
  }
}
componentDidMount() {
  this.setState({loadig:true})
  fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        loadig: false,
        character:data
      })
    })
}

 render(){
  const text = this.setState.loadig ? "loading" : this.state.character.name
  return (
    <div>
      <p>{text}</p>
    </div>
  );
 } 
}

export default App
