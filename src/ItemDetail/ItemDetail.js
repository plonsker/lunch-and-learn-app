import React, { Component, PropTypes } from 'react';
import './ItemDetail.css';

class ItemDetail extends Component {

static propTypes = {
  name: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  votes: PropTypes.object.isRequired,
  flavors: PropTypes.object.isRequired,
}


render(){
  return (
  <div className="ItemDetail-container">
  <p className="ItemDetail-container">
  {this.props.name}
  </p>
  <p className="ItemDetail-container">
  {this.props.description}</p>
  <p className="ItemDetail-container">{this.props.votes}</p>
  <p className="ItemDetail-container">{this.props.flavors}</p>
  </div>
  );
  }
}
export default ItemDetail;
