import React, { Component } from 'react'
import './BdayForm.css'

class BdayForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            month: '',
            day: ''
        }
    }

    handleChange = (e) => {
        let value = e.target.name !== 'name' ? Number(e.target.value) : e.target.value
        this.setState({
            [e.target.name]: value,
            id: Date.now()
        })
    }

    render() {
        return (
            <form className='bday-form'>
                <div className="input">
                    <label for="name">Name:</label>
                    <input className="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="input">
                    <label for="month">Month:</label>
                    <input className="month" name="month"  type="text" value={this.state.month} onChange={this.handleChange} />
                </div>
                <div className="input">
                    <label for="day">Day:</label>
                    <input className="day" name="day"  type="text" value={this.state.day} onChange={this.handleChange} />
                </div>
                <button className="add-btn" type="submit" onClick={(event) => {this.props.click(this.state, event)}}>Add this birthday!</button>
            </form>
        )
    }
}

export default BdayForm