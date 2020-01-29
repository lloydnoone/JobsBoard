import React from 'react'

class AdzunaListing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDisplay: false
    }

    this.toggleDetails = this.toggleDetails.bind(this)
  }

  toggleDetails() {
    this.setState({ detailsDisplay: !this.state.detailsDisplay })
  }

  render() {
    const { job } = this.props
    return (
      <div key={job.id} className='listing'>
        <h2 style={{ color: 'green' }}>Adzuna</h2>
        <p>Job Title: {job.title}</p>
        <p>Location: {job.location.display_name}</p>
        <p>Company: {job.company.display_name}</p>
        <button className='button' onClick={this.toggleDetails}>Details</button>
        <div className={`details ${this.state.detailsDisplay ? 'detailsOpen' : ''}`}>
          <p>Salary: {job.salary_min} - {job.salary_max}</p>
          <h3>Description: </h3>
          <p>{job.description}</p>
          <a href={job.redirect_url}><button className='button'>Apply</button></a>
        </div>
      </div>
    )
  }
}

export default AdzunaListing