import React from "react";
import "./Order.css";

export default function Order() {
  return (
    <div>
      <h1>Order your meal </h1>
      <form>
        <label className="container">
          Breakfast
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label className="container">
          Lunch
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <label class="container">
          Dinner
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <button className="order-btn">Submit</button>
      </form>
    </div>
  );
}
