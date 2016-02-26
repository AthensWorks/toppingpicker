import React, { Component } from 'react'

export default class ToppingsList extends Component {
  render() {
    const { toppings } = this.props
    return (
      <ul>
        {toppings && toppings.map((topping, idx) =>
          <li key={idx}>{topping}</li>)}
      </ul>
    )
  }
}
