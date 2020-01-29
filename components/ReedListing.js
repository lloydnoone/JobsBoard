import React from 'react'

class ReedListing extends React.Component {
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
      <div key={job.jobId} className='listing'>
        <h2 style={{ color: 'blue' }} >Reed</h2>
        <p>Job Title: {job.jobTitle}</p>
        <p>Location: {job.locationName}</p>
        <p>Company: {job.employerName}</p>
      </div>
    )
  }
}

export default ReedListing