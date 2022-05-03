import React from 'react';

export default function Order({ drinkId, sideId, foodId }) {
  return (
    <div className="order">
      Here is your Order:
      <img src={`${drinkId}.jpeg`} />
      <img src={`${sideId}.jpeg`} />
      <img src={`${foodId}.jpeg`} />
    </div>
  );
}
