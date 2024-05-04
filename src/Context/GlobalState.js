import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  if (localStorage.getItem("transactions") == null) {
    initialState.transactions = [];
  } else {
    initialState.transactions = JSON.parse(
      localStorage.getItem("transactions")
    );
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const saveToLS = () => {
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    };
    saveToLS();
  }, [state.transactions]);

  function deleteTransaction(id) {
    console.log(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
