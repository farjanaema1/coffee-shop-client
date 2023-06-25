import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../shop/cart/cart";
import ReviewItem from "../reviewItem/reviewItem";

const Orders = () => {
    const { initialCart } = useLoaderData();  // { products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    // const  handleRemoveItem = id => {
    //     const proceed = window.confirm('are you sure to delete?');
    //     if(proceed){
    //       fetch(`http://localhost:5000/products/${id}`,{
    //         method:'DELETE'
    //       })
    //       .then( res => res.json())
    //     }  

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to="/">Shop more</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart}  cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
            
};

export default Orders;