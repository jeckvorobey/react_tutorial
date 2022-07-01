import React, {Component} from "react";
import PropTypes from "prop-types";

const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
)

MyLink.proopTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

MyLink.defaultProps = {
  text: 'Link',
  onClick: () => {},
}

class MainEvents extends Component {
  
  handleClick = (event) => {
    event.preventDefault()
    console.log('Ссылка нажата')
  }
  
  render () {
    return (
      <div>
        <MyLink onClick={this.handleClick}/>
      </div>
    )
  }
}

export default MainEvents