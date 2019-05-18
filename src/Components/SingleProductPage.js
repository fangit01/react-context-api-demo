import React, { Component } from 'react'
import { Button } from 'antd';
import {CartContext} from '../Contexts/CartContext'

export default class SingleProductPage extends Component {
  static contextType = CartContext;
  render() {
    console.log(this.context) // {cartTotal:0}
    return (
      <div>
               <Button onClick={this.context.addOne} type="primary">Add to Cart</Button>
      </div>
    )
  }
}
