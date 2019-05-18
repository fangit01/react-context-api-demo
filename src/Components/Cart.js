import React, { Component } from 'react'
import { Badge } from 'antd';
import {CartContext} from '../Contexts/CartContext'

export default class Cart extends Component {
  static contextType = CartContext;
  render() {
    console.log(this.context) // {cartTotal:0}
    return (
      <div>
            <Badge count={this.context.cartTotal} showZero style={{backgroundColor:'green'}} />
      </div>
    )
  }
}
