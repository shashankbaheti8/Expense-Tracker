import React from 'react'

export default function Balance() {
  return (
    <div>
      <h5>Your Balance</h5>
      <h1 id="balance">₹0.00</h1>

      <div className="inc-exp-container">
        <div>
            <h5>Income</h5>
            <p id='money-positive' className='money positive'>+₹0.00</p>
        </div>
        <div>
            <h5>Expense</h5>
            <p id='money-negative' className='money negative'>-₹0.00</p>
        </div>
      </div>
    </div>
  )
}