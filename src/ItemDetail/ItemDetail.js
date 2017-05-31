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
  <div className="ItemDetail-container">

  </div>
  }
}
export default InventoryList;
