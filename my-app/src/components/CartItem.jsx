import React from 'react';


const CartItem = (props) => {
    console.log(props)
    return (
        <div className="collection-item">
        <div className="row">
            <div className="col-md-8">{props.item.product.name}</div>
            <div className="col-md-2">{(props.item.product.priceInCents / 100).toFixed(2)}</div>
            <div className="col-md-2">{props.item.quantity}</div>
        </div>
        </div>
    );
}

export default CartItem;