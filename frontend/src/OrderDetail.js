import React from 'react';
import { useParams } from 'react-router-dom';
import './orderDetailStyling.css'; // Import the custom CSS

const OrderDetail = ({ orders }) => {
  const { id } = useParams();
  const order = orders.find(order => order.id === parseInt(id));

  if (!order) {
    return <div>Order not found</div>;
  }

  const {
    customerName,
    details: {
      orderDate,
      weddingDate,
      returnDate,
      courierDate,
      depositDate,
      itemPrice,
      courierCharges,
      totalAmount,
      paidAmount,
      completed
    }
  } = order;

  return (
    <div className="order-detail">
      <h2>Order Detail</h2>
      <div className="order-info">
        <p><strong>Customer Name:</strong> {customerName}</p>
        <p><strong>Order Date:</strong> {orderDate}</p>
        <p><strong>Wedding Date:</strong> {weddingDate}</p>
        <p><strong>Return Date:</strong> {returnDate}</p>
        <p><strong>Courier Date:</strong> {courierDate}</p>
        <p><strong>Deposit Date:</strong> {depositDate}</p>
        <p><strong>Item Price:</strong> {itemPrice}</p>
        <p><strong>Courier Charges:</strong> {courierCharges}</p>
        <p><strong>Total Amount:</strong> {totalAmount}</p>
        <p><strong>Paid Amount:</strong> {paidAmount}</p>
        <p><strong>Completed:</strong> {completed ? 'Yes' : 'No'}</p>
      </div>
      <button className="btn-save">Save Changes</button>
    </div>
  );
};

export default OrderDetail;
