import React, { Component } from 'react'
import './App.css';
import { months } from '../../months_data';
import BdayGrid from './BdayGrid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      birthdays: [],
      months: []
    }
  }

  componentDidMount() {
    this.getBirthdays()
    this.getMonths()
  }

  getBirthdays() {
    return fetch('http://localhost:3001/api/v1/birthdays')
      .then(response => response.json())
      .then(data => this.setState({
        birthdays: data
      }))
      .catch(err => console.log(err))
  }

  getMonths() {
    return fetch('http://localhost:3001/api/v1/months')
      .then(response => response.json())
      .then(data => this.setState({
        months: data
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      !this.state.months.length ? <h2>Loading...</h2> :
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
  
        </div>
        <BdayGrid birthdays={this.state.birthdays} months={this.state.months}/>

      </div>
    );
  }

}

export default App;
