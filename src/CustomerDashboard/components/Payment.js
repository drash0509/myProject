import React from 'react';
import back from '../images/back.png';
import { useNavigate } from 'react-router-dom';

const Summary = ({ price, quantity}) => {
  console.log('Price in PaymentForm:', price); // Add this line to check the value of price

  console.log('p4',price);
  const subTotal = price * quantity;
  const gst = subTotal * 0.12;
  const total = subTotal + gst;

  return (
    <div className="bg-white  w-fit md:w-fit border border-gray-300 p-8 px-12 rounded-lg h-fit shadow-lg mb-4 md:mb-0">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <div className="mb-4">
        {/* <p><span className="font-bold">Price:</span> ${price}</p>
        <p><span className="font-bold">Quantity:</span> {quantity}</p>
        <p><span className="font-bold">Subtotal:</span> ${subTotal}</p>
        <p><span className="font-bold">GST (12%):</span> ${gst}</p> */}
      </div>
      <div className="mb-4 border-t pt-4">
        <p className="font-bold">TOTAL:</p>
        <p>${total}</p>
      </div>
    </div>
  );
};

function PaymentForm({ onPay, price, quantity }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='p-8 md:justify-between ' >
     <div className="flex  left-3">
            <img
              src={back}
              alt="Back"
              className="cursor-pointer w-5 left-5 h-5 mx-8 my-8 flex"
              onClick={handleBackClick}
            />
          </div>
      <div className="flex flex-col-reverse justify-center md:justify-between w-full md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
         
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email address" required />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your phone number" required />
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <textarea id="address" name="address" rows="3" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your address" required></textarea>
            </div>
            <div className="flex justify-between">
              <button type="submit" onClick={onPay} className="bg-custom-brown hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
            </div>
          </form>
        </div>
        {/* <div className="w-full md:auto justify-self-end"> */}
          <Summary price={price} quantity={quantity} />
        {/* </div> */}
      </div>
    </div>
  );
}

export default PaymentForm;
