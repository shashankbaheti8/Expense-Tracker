import React from 'react'

export default function History() {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-₹400</span>
          <button className="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
  )
}
