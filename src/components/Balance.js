import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  // INCOME'LARN TOPLAMI
  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  // EXPENSE'LERİN TOPLAMI
  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);
  const totalExpense = expenseAmounts
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>your balance</h2>
      <h3>${(totalIncome - totalExpense).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>income</h3>
          {/* <p>+$0.00</p> */}
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>expenses</h3>
          <p>-${totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
