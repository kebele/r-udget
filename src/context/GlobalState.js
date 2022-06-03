import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  // localstorage'dan getirmek için JSON.parse("...") kullanmamız lazım
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) ||
    [
      // { id: 1, incomeText: "car sold", incomeAmount: 15000 },
      // { id: 2, incomeText: "bonus", incomeAmount: 5000 },
      // { id: 3, incomeText: "salary", incomeAmount: 13000 },
    ],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) ||
    [
      // { id: 4, expenseText: "rent", expenseAmount: 1600 },
      // { id: 5, expenseText: "bank", expenseAmount: 2000 },
      // { id: 6, expenseText: "clothes", expenseAmount: 500 },
    ],
};

export const GlobalContext = createContext(initialState);

// HERYERDEN OLAŞILABILIR PROVIDER
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // LOCAL STORAGE
  // local storage'a kaydetmek için

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  });

  // ADD INCOME
  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };

  // ADD EXPENSE
  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  // DELETE TRANSACTION
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
