import React, { Component } from 'react';

export default class Products extends Component {
    render() {
        return (
            <div className="products">
                {this.props.products.map((product) => (
                    <li key={product.id}>
                        <div className="product">
                            <a href={"#" + product.id}>
                                <img src={product.image} alt={product.name}></img>
                                <p>{product.name}</p>
                            </a>
                            <div className="product-price">
                                <div>{'$' + product.price}</div>
                                <button onClick={() => this.props.addToCart(product)} className="button primary">Add to cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        )
    }
}
