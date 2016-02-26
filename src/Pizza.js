import React from 'react'
import ToppingsList from './ToppingsList'

const Pizza = ({onClickRegenerate, onClickRemove, toppings}) =>
  <div>
    <ToppingsList toppings={toppings} />
    <button onClick={() => onClickRegenerate && onClickRegenerate()}>
      REGENERATE
    </button>
    <button onClick={() => onClickRemove && onClickRemove()}>
      X
    </button>
  </div>

export default Pizza
