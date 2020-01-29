import React from 'react'

import AdzunaListings from './AdzunaListings'
import GithubListings from './GithubListings'
import ReedListings from './ReedListings'


class Listings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDisplay: true
    }
  }

  render() {
    console.log(this.props.jobs)
    return (
      <div className="listings">
        {this.props.jobs.jobsArray.map(job => {
          return (
            <div key={job.id} className='listing'>
              <h2>Job Title: {job.title}</h2>
              <p>Location: {job.location}</p>
              <p>Company: {job.company}</p>
              <div className={`details ${this.state.detailsDisplay ? 'detailsOpen' : ''}`}>
                <p>Salary: {job.minSalary} - {job.maxSalary}</p>
                <h3>Description: </h3>
                <p>{job.description}</p>
                <a><button className='button'>Apply</button></a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Listings

//`.details ${this.state.detailsDisplay ? '.detailsOpen' : ''}`