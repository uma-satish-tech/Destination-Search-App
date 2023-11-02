import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {item} = this.props
    const {imgUrl, name} = item
    return (
      <li>
        <img src={imgUrl} alt={name} className="img-size" />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem
