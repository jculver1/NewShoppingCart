import React from 'react';


const CartItem = (props) => {
    console.log(props)
    return (
        <div class="collection-item">
        <div class="row">
            <div class="col-md-8">{props.item.product.name}</div>
            <div class="col-md-2">{props.item.product.priceInCents}</div>
            <div class="col-md-2">{props.item.quantity}</div>
        </div>
        </div>
    );
}

export default CartItem;