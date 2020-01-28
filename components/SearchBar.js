import React from 'react'

import Dropdown from './Dropdown'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('search bar render')
    return (
      <div className="searchBar">
        <Dropdown location={this.props.location} onClick={(e) => this.props.handleChange(e)} />
        <input data-name="title" placeholder="Search..." onChange={this.props.handleChange} />
        <button className="button" onClick={this.props.submitSearch}>Search</button>
      </div>
    )
  }
}

export default SearchBar