import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  //ADD INCOME
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  // incomeText ve incomeAmount'u rahat kullanabilmek için destructure yapalım
  const { incomeText, incomeAmount } = income;

  // girilen income'ları state'e atama
  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    // console.log(income);
  };

  // income'ları globalState'e yollama
  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText: incomeText,
        incomeAmount: incomeAmount * 1, //string'i number'a çevirmek için
      };
      // console.log(newIncomeTransaction);
      addIncome(newIncomeTransaction);
      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  // ***************************

  //ADD EXPENSE
  // expense state'ini hazırla initial state'e dikkat
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  // expenseText ve expenseAmount'u rahat kullanabilmek için destructure yapalım
  const { expenseText, expenseAmount } = expense;

  // girilen income'ları state'e atama
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    // console.log(income);
  };

  // expense'ları globalState'e yollama
  const onSubmitExpense = (e) => {
    e.preventDefault();
    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText: expenseText,
        expenseAmount: expenseAmount * 1, //string'i number'a çevirmek için
      };
      // console.log(newIncomeTransaction);
      addExpense(newExpenseTransaction);
      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            placeholder="add income"
            autoComplete="off"
            onChange={onChangeIncome}
            name="incomeText"
            value={incomeText}
          />
          <input
            type="number"
            placeholder="amount"
            autoComplete="off"
            onChange={onChangeIncome}
            name="incomeAmount"
            value={incomeAmount}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="add expense"
            autoComplete="off"
            name="expenseText"
            onChange={onChangeExpense}
            value={expenseText}
          />
          <input
            type="number"
            placeholder="amount"
            autoComplete="off"
            name="expenseAmount"
            onChange={onChangeExpense}
            value={expenseAmount}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
