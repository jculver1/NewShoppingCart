import React from 'react';

const AddItem = (props) => {
    console.log(props)

    return (
        <div className="container">
        <form onSubmit={props.addItem}>
        <div className="form-group">
            <label>Quantity</label>
            <input onChange = {props.quantity} type="number" class="form-control" placeholder="Quantity"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select onChange={props.selectItem} className="form-control" id="exampleFormControlSelect1">
            {props.products.map(product => <option key={product.id} price={product.priceInCents} value={product.name}>{product.name} ${(product.priceInCents / 100).toFixed(2)}</option>)}
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Add Item</button>
        </form>
       
            <h3>Total: {props.total}  </h3>
        </div>
    )
}
export default AddItem;