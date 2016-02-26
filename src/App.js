import React from 'react'
import Pizza from './Pizza'
import _ from 'lodash'
import axios from 'axios'

const randomPizza = (toppings) =>
  _.sampleSize(toppings, 2)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pizzas      : [],
      allToppings : [],
      isLoading   : true,
    }

    this.renderPizzas = this.renderPizzas.bind(this)
    this.addPizza = this.addPizza.bind(this)
    this.removePizza = this.removePizza.bind(this)
  }

  componentDidMount() {
    axios.get('https://rawgit.com/dariusk/corpora/master/data/foods/pizzaToppings.json')
      .then((resp) => resp.data)
      .then((data) => this.setState({
        allToppings: data.pizzaToppings,
        isLoading: false,
      }))
  }

  handleRegenerate(idx) {
    return () => {
      const pizzas = [
        ...this.state.pizzas.slice(0, idx),
        randomPizza(this.state.allToppings),
        ...this.state.pizzas.slice(idx+1),
      ]
      this.setState({pizzas})
    }
  }

  renderPizzas() {
    const { pizzas } = this.state
    return (
      <div>
        {pizzas.map((pizza,idx) =>
                    <Pizza
                      key={JSON.stringify(pizza.toppings)+idx.toString()}
                      toppings={pizza}
                      onClickRegenerate={this.handleRegenerate(idx)}
                      onClickRemove={this.removePizza(idx)}
                    />)}
      </div>
    )
  }

  addPizza() {
    this.setState({
      pizzas: [...this.state.pizzas, randomPizza(this.state.allToppings)],
    })
  }

  removePizza(idx) {
    return () => {
      this.setState({
        pizzas: [
          ...this.state.pizzas.slice(0, idx),
          ...this.state.pizzas.slice(idx + 1),
        ],
      })
    }
  }

  render() {
    const { pizzas, isLoading } = this.state
    if (isLoading) return <h1>Loading...</h1>
    return (
      <div>
        <div>
          Number of Pizzas: {pizzas.length}
          <button onClick={this.addPizza}>Add pizza</button>
        </div>
        {this.renderPizzas()}
      </div>
    )
  }
}
