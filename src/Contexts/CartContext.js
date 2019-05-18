import React, { Component, createContext } from 'react'

//need to export both
export const CartContext = createContext();

export class CartProvider extends Component {
    state = {
        cartTotal: 0
    }

    addOneToCart = () =>{
        this.setState({cartTotal:this.state.cartTotal+1})
    }

    render() {
        return (
            <CartContext.Provider value={{ ...this.state, addOne:this.addOneToCart}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}
