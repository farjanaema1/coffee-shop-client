const Cart = (props) => {
    const { cart, clearCart, children } = props;
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
       // shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart text-white font-bold text-success p-5'>
            <h4 className="para-link">Order Summary</h4>
            <p className="para-link">Selected Items: {quantity}</p>
            <p className="para-link">Total price: ${total}</p>
            {/* <p>Total Shipping: ${shipping}</p> */}
            <p className="para-link">Tax: {tax}</p>
            <h5 className="para-link">Grand Total: {grandTotal.toFixed(2)}</h5>
            <button className="btn btn-secondary btn-sm mt-2" onClick={clearCart}>Clear Cart</button>
            {/* {children} */}
        </div>
    );
};

export default Cart;