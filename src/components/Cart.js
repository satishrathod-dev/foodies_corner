import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  // const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // setLocation({ latitude, longitude });
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // handleClearCart();
        },
        (error) => {
          setError(error.message);
          console.log(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser ");
    }
  };

  // useEffect(() => {
  //   requestLocationPermission();
  // }, []);
  // requestLocationPermission();

  const handleSubmit = () => {
    handleClearCart();
    requestLocationPermission();
  };

  // Check if cartItems is defined and is an array
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>No items in the cart</div>
        <button
          className="p-2 m-2 w-24 bg-black text-white rounded-lg"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    );
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        <ItemList items={cartItems} />
      </div>
      <div>
        <button
          className="p-2 m-2 w-24 bg-black text-white rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Cart;
