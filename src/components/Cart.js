import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart empty</div>
                ) : (
                        <div className="cart cart-header">
                            You have {cartItems.length} product(s) in your cart{"."}
                        </div>
                    )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <img src={item.image} alt={item.name}></img>
                                    </div>
                                    <div>
                                        <div>{item.name}</div>
                                        <div className="right">
                                            ${item.price} x {item.count} = {(item.price * item.count).toFixed(2)}{" "}
                                            <button onClick={() => this.props.removeFromCart(item)}>
                                                Remove
                                        </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !== 0 && (
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total:{" "}
                                    {"$" + cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
