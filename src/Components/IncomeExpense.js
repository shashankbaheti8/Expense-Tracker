import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amountArray = transactions?.map((item) => item.amount);
  const Balance = amountArray?.reduce(
    (prev, item) => prev + parseFloat(item),
    0
  );
  const Income = amountArray
    .filter((item) => item > 0)
    .reduce((prev, item) => prev + parseFloat(item), 0);
  const Expense = amountArray
    .filter((item) => item < 0)
    .reduce((prev, item) => prev + parseFloat(item), 0);

  function formatAmount(amount) {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      return new Intl.NumberFormat("en-IN").format(parsedAmount.toFixed(2));
    }
  }

  return (
    <div className="balance">
      <div>
        <p>Your Balance</p>
        <h4 style={{ fontSize: "1.5rem" }}>
          {Balance < 0 && "-"}&#8377;{formatAmount(Math.abs(Balance))}
        </h4>
      </div>
      <div className="IncExp">
        <div className="Income">
          <h4>Income</h4>
          <p>&#8377;{formatAmount(Income)}</p>
        </div>
        <div className="line"></div>
        <div className="Expense">
          <h4>Expense</h4>
          <p>
            {Expense < 0 && "-"}&#8377;{formatAmount(Math.abs(Expense))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
