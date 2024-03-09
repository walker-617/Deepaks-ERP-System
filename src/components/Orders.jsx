import Navbar from "./Navbar";
import orders from "../data/orders.json";
import { useState } from "react";

function Orders() {

    const [order,setOrder]=useState();

    const status_list=["Pending Payment","Processing","Shipped","Delivered"];

    function update_order(order){
        setOrder(order);
        document.querySelector(".background-blur").style.visibility="visible";
        document.querySelector(".update-order").style.visibility="visible";
    }

    function delete_order(order){
        setOrder(order);
        document.querySelector(".background-blur").style.visibility="visible";
        document.querySelector(".delete-order").style.visibility="visible";
    }

    function cancel(){
        setOrder(null);
        document.querySelector(".background-blur").style.visibility="hidden";
        document.querySelector(".update-order").style.visibility="hidden";
        document.querySelector(".delete-order").style.visibility="hidden";
        for(const i in status_list){
            document.getElementById(status_list[i]).style.border="none";
            document.getElementById(status_list[i]).style.padding="10px";
        }
    }

    function update(){
        setOrder(null);
        document.querySelector(".background-blur").style.visibility="hidden";
        document.querySelector(".update-order").style.visibility="hidden";
        for(const i in status_list){
            document.getElementById(status_list[i]).style.border="none";
            document.getElementById(status_list[i]).style.padding="10px";
        }
    }

    function _delete(){
        setOrder(null);
        document.querySelector(".background-blur").style.visibility="hidden";
        document.querySelector(".delete-order").style.visibility="hidden";
    }

    function select_status(status){
        for(const i in status_list){
            document.getElementById(status_list[i]).style.border="none";
            document.getElementById(status_list[i]).style.padding="10px";
        }
        document.getElementById(status).style.border="3px solid black";
        document.getElementById(status).style.padding="7px";
    }

  return (
    <>
      <Navbar />
      <h2>Orders</h2>
      <div className="orders">
        {orders.map((order, i) => (
          <div key={order.order_id} className="order">
            <div className="order-details">
              <div>{order.order_id}</div>
              <div>{order.customer_name}</div>
              <div>{order.order_date}</div>
              <div>{order.status}</div>
            </div>
            <div className="alter-order">
              <div className="alter" onClick={()=>update_order(order)}>Update</div>
              <div className="alter" onClick={()=>delete_order(order)}>Delete</div>
            </div>
          </div>
        ))}
      </div>
      <div className="background-blur"></div>

      <div className="update-order">
        <div>{order && order.order_id }</div>
        <div>{order && order.order_date}</div>
        <div>{order && order.customer_name}</div>
        <h3>Update Status <span style={{"color":"grey","fontSize":"12px"}}>(Click to change)</span></h3>
        <div className="status">
          <div id="Delivered" onClick={()=>{select_status("Delivered")}}>Delivered</div>
          <div id="Shipped" onClick={()=>{select_status("Shipped")}}>Shipped</div>
          <div id="Processing" onClick={()=>{select_status("Processing")}}>Processing</div>
          <div id="Pending Payment" onClick={()=>{select_status("Pending Payment")}}>Pending Payment</div>
        </div>
        <div className="confirm">
          <div onClick={()=>update()}>Update</div>
          <div onClick={()=>cancel()}>Cancel</div>
        </div>
      </div>

      <div className="delete-order">
        <div>{order && order.order_id }</div>
        <div>{order && order.order_date}</div>
        <div>{order && order.customer_name}</div>
        <div>{order && order.status}</div>
        <h3>Do you really want to delete the order?</h3>
        <div className="confirm">
          <div onClick={()=>_delete()}>Delete</div>
          <div onClick={()=>cancel()}>Cancel</div>
        </div>
      </div>
    </>
  );
}

export default Orders;
