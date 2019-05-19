# How to use react context api
1. create a context e.g. CartContext.js  
2. wrap the component you want to access to CartContext with CartProvider, e.g. check App.js 
3. inside the component you want to access the CartContext, declear `static contextType = CartContext` first, and use `this.context` to access the context details. In this example, we let Cart.js and SingleProductPage.js to access the context


# Using multiple context in one component
One Component can only use one context, e.g. in Cart.js  
  `static contextType = CartContext;`  
if want to use more than one context, need to wrapper the the whole component in `MyContext.Consumer`.
For example: if we have a language context, and want to use the language context inside Cart.js along with CartContext, we can do:  
```
return(
<LanguageContext.Consumer>
{
    value =>(
        // the whole return part of Cart.js
        <div>
            <Badge count={this.context.cartTotal} showZero style={{backgroundColor:'green'}} />
        </div>
    )
}
<LanguageContext.Consumer>
)
```

inside `value` (or whatever name you want), we can access all the content of LanguageConext.

