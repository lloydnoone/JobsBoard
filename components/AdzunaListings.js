import React from 'react'

import AdzunaListing from './AdzunaListing'

class AdzunaListings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { adzuna } = this.props
    return (
      <>
        {adzuna.results.map(job => {
          return <AdzunaListing key={job.id} job={job} />
        })}
      </>
    )
  }
}

export default AdzunaListings