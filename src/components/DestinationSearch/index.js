import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div>
        <div className="app-container">
          <h1>Destination Search</h1>
          <div>
            <input
              type="search"
              placeholder="search"
              onChange={this.onChangeSearch}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="searchIcon"
            />
          </div>

          <div>
            <ul>
              {searchResults.map(eachItem => (
                <DestinationItem item={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
