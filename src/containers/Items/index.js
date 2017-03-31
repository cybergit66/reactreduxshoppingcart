import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import './items.css';


class Items extends Component {

  renderList = () => {
    const { items, addToCartAction } = this.props;
    return items.map((item) => (
      <li key={item.id} className="Items-list-item" onClick={() => addToCartAction(item)}>
        <img alt="presentation" src={item.link} className="Items-image"/>
        <span>{item.title}</span>
      </li>
    ))
  }

  render() {
    return (
      <ul className="Items-list">
        {this.renderList()}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCartAction: (item) => dispatch(addToCart(item))
})

const mapStateToProps = (reduxState) => ({
  items: reduxState.items
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)
