import React from 'react';

const Bill = ({ price, quantity, onClose, onConfirm }) => {
  const subTotal = price * quantity;
  const gst = subTotal * 0.12;
  const total = subTotal + gst;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Bill</h2>
      <div className="mb-4">
        <p><span className="font-bold">Price:</span> ${price.toFixed(2)}</p>
        <p><span className="font-bold">Quantity:</span> {quantity}</p>
        <p><span className="font-bold">Subtotal:</span> ${subTotal.toFixed(2)}</p>
        <p><span className="font-bold">GST (12%):</span> ${gst.toFixed(2)}</p>
      </div>
      <div className="mb-4 border-t pt-4">
        <p className="font-bold">TOTAL:</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <button className="bg-custom-brown hover:bg-opacity-50 text-white px-4 py-2 rounded-md mr-2" onClick={onConfirm}>Confirm</button>
        <button className="bg-custom-beige hover:bg-custom-brown hover:bg-opacity-10 text-gray-700 px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Bill;
