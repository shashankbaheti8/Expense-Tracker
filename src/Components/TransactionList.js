import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);

  function formatAmount(amount) {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      return new Intl.NumberFormat("en-IN").format(parsedAmount.toFixed(2));
    }
  }

  return (
    <div className="list">
      <div className="history">History</div>
      <hr />
      {transactions.length > 0 ? (
        transactions.map((item, id) => (
          <>
            <div className="transaction" key={id}>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(item.id)}
              >
                <MdOutlineDeleteOutline />
              </button>
              <p>{item.title}</p>
              <div>
                {item.amount > 0 ? "" : "-"} &#8377;
                {formatAmount(Math.abs(item.amount))}
                <p
                  className={`inc-exp ${item.amount > 0 ? "green" : "red"}`}
                ></p>
              </div>
            </div>
          </>
        ))
      ) : (
        <>
          <p>You have no transactions yet.</p>
        </>
      )}
    </div>
  );
};

export default TransactionList;
