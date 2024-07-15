import React, { useState } from "react";
import { Link } from "react-router-dom";
import VerticalNav from "./VerticalNav"; // Correct the import statement
import './allOrdersStyling.css'; // Import the custom CSS

const dummyData = [
  { 
    id: 1,
    itemCode: '001', 
    itemName: 'Item 1', 
    customerName: 'Customer 1', 
    date: '2024-07-01', 
    description: 'Description 1', 
    done: false,
    details: {
      orderDate: '2024-07-01',
      weddingDate: '2024-07-10',
      returnDate: '2024-07-15',
      courierDate: '2024-07-02',
      depositDate: '2024-07-03',
      itemPrice: '$100',
      courierCharges: '$10',
      totalAmount: '$110',
      paidAmount: '$110',
      completed: true
    }
  },
  { 
    id: 2,
    itemCode: '002', 
    itemName: 'Item 2', 
    customerName: 'Customer 2', 
    date: '2024-07-02', 
    description: 'Description 2', 
    done: false,
    details: {
      orderDate: '2024-07-02',
      weddingDate: '2024-07-12',
      returnDate: '2024-07-17',
      courierDate: '2024-07-03',
      depositDate: '2024-07-04',
      itemPrice: '$120',
      courierCharges: '$15',
      totalAmount: '$135',
      paidAmount: '$135',
      completed: false
    }
  },
  // Add more dummy data as needed
];

function AllOrders() {
  const [orders, setOrders] = useState(dummyData); // Ensure correct case for dummyData

  const handleCheckboxChange = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].done = !updatedOrders[index].done;
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-page">
      <VerticalNav links={[
        { name: "Previous", path: "/previous" },
        { name: "Add New Customer", path: "/register" },
        { name: "LogOut", path: "/logout" }
      ]} />
      <div className="orders-content">
        <h2 className="orders-title">All Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>ITEM CODE</th>
              <th>ITEM NAME</th>
              <th>CUSTOMER NAME</th>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>DONE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td><Link to={`/order/${order.id}`}>{order.itemCode}</Link></td>
                <td>{order.itemName}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.description}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={order.done}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllOrders;