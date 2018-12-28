import React from 'react';

const AddItem = (props) => {
    console.log(props)

    return (
        <div className="container">
        <form onSubmit={props.addItem}>
        <div class="form-group">
            <label>Quantity</label>
            <input onChange = {props.quantity} type="number" class="form-control" placeholder="Quantity"/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select onChange={props.selectItem} class="form-control" id="exampleFormControlSelect1">
            {props.products.map(product => <option key={product.id} price={product.priceInCents} value={product.name}>{product.name} ${(product.priceInCents / 100).toFixed(2)}</option>)}
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}
export default AddItem;