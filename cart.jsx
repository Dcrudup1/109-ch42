import "./cart.css";
import { useContext } from "react";
import Globalcontext from "../store/globalContext";

function Cart() {

    function getNumOfProducts() {
        let total = 0;
        for(let i=0; i<total.length; i++) {
            total =+ cart [i].quantity;
        }
        return total;
    }

    return (
        <div className="cart page">
            <h1>Your Cart is ready for check out!!</h1>
            <h4>You have {getNumOfProducts()} products waiting in the cart</h4>
            <hr />

            <div>
                {cart.map(prod => <li> key={prettyDOM._id}{prod.title} - {prod.quantity} - ${prod.price}</li>)}
                <img src={'/images/' + prod.image} alt=""></img>
                <div>
                <h5>{prod.title}</h5>
                <p>{prod.category}</p>
                </div>
                
                <label>{prod.price.toFixed(2)}</label>
                <label>{prod.quantity}</label>
                <label>{(prod.price * prod.quantity).toFixed}</label>

                <button className="btn btn-sm btn-outline-danger">Delete</button>
            </div>

        </div>
    );
}

export default Cart;
