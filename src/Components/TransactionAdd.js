import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../Context/GlobalState";

const TransactionAdd = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [data, setData] = useState({
    title: "",
    amount: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    title: "",
    amount: "",
  });

  const handleTitleChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      title: value,
    }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, title: "" }));
  };

  const handleAmountChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      amount: value,
    }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, amount: "" }));
  };


  const handleReset = () => {
    setData({
      title: "",
      amount: "",
    });
    setValidationErrors({
      title: "",
      amount: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const errors = {};
    if (data.title.trim() === "") {
      errors.title = "Title is required.";
    }
    if (data.amount.trim() === "") {
      errors.amount = "Amount is required.";
    }
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});

    const newTransaction = {
      id: uuidv4(),
      title: data.title,
      amount: data.amount,
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
    handleReset();
  };

  return (
    <div className="add-transaction">
      <div className="history">Add Transaction</div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter here"
            id="title"
            value={data.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            autoFocus
          />
          {validationErrors.title && (
            <div className="error">{validationErrors.title}</div>
          )}
        </div>

        <div className="amount">
          <label htmlFor="Amount">
            Amount<p>(Negative-Expense, Positive-Income)</p>
          </label>
          <input
            type="number"
            placeholder="Enter here"
            id="Amount"
            value={data.amount}
            onChange={(e) => handleAmountChange(e.target.value)}
          />
          {validationErrors.amount && (
            <div className="error">{validationErrors.amount}</div>
          )}
        </div>

        <button className="button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionAdd;
