import React from 'react'

class GithubListing extends React.Component {
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
        <h2 style={{ color: 'red' }} >Github</h2>
        <p>Job Title: {job.title}</p>
        <p>Location: {job.location}</p>
        <p>Company: {job.company}</p>
      </div>
    )
  }
}

export default GithubListing