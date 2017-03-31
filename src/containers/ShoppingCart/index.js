import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';

class ShoppingCart extends Component {

  renderCart = () => {
    const { shoppingCart, removeFromCartDispatch } = this.props;
    return shoppingCart.map((item) => (
      <li key={item.id} onClick={() => removeFromCartDispatch(item.id)}>
        <span>{item.title}</span>
      </li>
    ))
  }

  render() {
    return (
      <ul>
        {this.renderCart()}
      </ul>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  shoppingCart: reduxState.shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
