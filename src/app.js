import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      jobs: null
    }
  }

  componentDidMount() {
    axios.get('/api/jobs')
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.jobs) return null
    console.log(this.state.jobs)
    return (
      <div className='App'>
        {this.state.jobs.results.map((job) => {
          return <h1 key={job.id}>(Adzuna) job title: {job.title}</h1>
        })}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)