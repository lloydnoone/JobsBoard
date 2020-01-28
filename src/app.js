import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchBar from '../components/SearchBar'
import Listings from '../components/Listings'

import './style.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      jobs: null,
      title: 'Javascript',
      location: 'London'
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
  }

  componentDidMount() {
    axios.get('/api/jobs/javascript/london')
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ [e.target.dataset.name]: (e.target.value || e.target.innerHTML) })
  }

  submitSearch() {
    axios.get(`/api/jobs/${this.state.title}/${this.state.location}`)
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.jobs) return null
    console.log(this.state.jobs)
    const { adzuna, github, reed } = this.state.jobs
    return (
      <div className='App'>
        <SearchBar 
          location={this.state.location}  
          handleChange={this.handleChange}
          submitSearch={this.submitSearch}
        />
        <Listings 
          adzuna={adzuna}
          github={github}
          reed={reed}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)