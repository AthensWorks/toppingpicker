import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = { count : 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { step } = this.props
    this.setState({ count: this.state.count + step })
  }

  render() {
    return (
      <h1 onClick={this.handleClick}>
        Count: {this.state.count}
      </h1>
    )
  }
}
