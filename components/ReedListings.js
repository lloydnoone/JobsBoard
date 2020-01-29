import React from 'react'
import ReedListing from './ReedListing'

class ReedListings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { reed } = this.props
    return (
      <>
        {reed.results.map(job => {
          return <ReedListing key={job.jobId} job={job} />
        })}
      </>
    )
  }
}

export default ReedListings