import React from 'react'
import GithubListing from './GithubListing'

class GithubListings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { github } = this.props
    return (
      <>
        {github.map(job => {
          return <GithubListing key={job.id} job={job} />
        })}
      </>
    )
  }
}

export default GithubListings