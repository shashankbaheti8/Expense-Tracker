import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
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

  // Actions
  function deleteTransaction(id) {
    console.log(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
    // saveToLS();
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
    // saveToLS();
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
