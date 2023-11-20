import React, { useState } from 'react'

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

  return (
    <div>
      <h4>Add new transaction</h4>
      <form>
        <div className="form-control">
            <label htmlFor='text'>Description</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />

        </div>
        <div className="form-control">
            <label htmlFor='amount'>Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  )
}
