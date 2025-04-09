import React, { useEffect, useState } from "react";
import noOrderFound from '../Components/Assets/Noitem.jpg'

function YourOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold font-[Poppins] mb-4 text-fuchsia-600">Your Orders</h2>
      {orders.length === 0 ? (
        <div className="flex justify-center items-center">
			<img src={noOrderFound} alt="" />
		</div>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 mb-6 rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-green-600">Order #{index + 1}</h3>
            <p className="text-sm text-gray-600 mb-2">Ordered on: {order.orderDate}</p>
            <div className="mb-2">
              <strong>Delivery To : </strong> {order.address.First_Name} {order.address.Last_Name},{" "}
              {order.address.city}, {order.address.Pin_Code}
            </div>
            <div className="space-y-1">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.name} (x{item.qty})</span>
                  <span>Price : {item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default YourOrders;
