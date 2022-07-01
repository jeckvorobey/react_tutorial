import React, {Component} from "react";
import PropTypes from "prop-types";

// Node
Component.propType = {
  node: PropTypes.node,
}

// Element
Component.propType = {
  Element: PropTypes.element,
}

// Instance Of
Component.propType = {
  instance: PropTypes.instanceOf,
}
// One of
Component.propType = {
  elem: PropTypes.oneOf(['v1', 'v2']),
}
//One of type
Component.propType = {
  elem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
// Array of / Object of
Component.propType = {
  array: PropTypes.arrayOf(PropTypes.string),
  object: PropTypes.objectOf(PropTypes.number)
}
// Shape
Component.propType = {
  obj: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    lineHeight: PropTypes.number
  })
}

export const Counter = ({counter = 0}) => {
  return <h1>{`Компонент счётчика. Значение счетчика: ${counter}`} </h1>
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
}

Counter.defaultProps = {
  counter: 0,
  func: () => {},
  number: 3,
  string: '',
}

export class Main extends Component {
  static propTypes = {
    children: PropTypes.element,
  }
  
  static defaultProps = {
    children: null,
  }
  
  state = {
    counter: 0,
  }
  
  handleClick = () => {
    this.setState(({counter}) => ({
      counter: ++counter
    }))
  }
  
  render () {
    const {counter} = this.state
    const {children} = this.props
    
    return (
      <section className={'main'}>
        <p>{counter}</p>
        {React.cloneElement(children, {counter: this.state.counter})}
        <button className={'btn'} onClick={this.handleClick}>+1</button>
      </section>
    )
  }
}
