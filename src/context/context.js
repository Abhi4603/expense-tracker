import React, { useReducer, createContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import contextReducer from './contextReducer';

// Load transactions from localStorage with error handling
const loadInitialState = () => {
  try {
    const storedData = JSON.parse(localStorage.getItem('transactions'));
    return storedData || [];
  } catch (error) {
    console.error('Error loading transactions from localStorage:', error);
    return [];
  }
};

const initialState = loadInitialState();

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Sync transactions with localStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  // Memoize balance calculation for optimization
  const balance = useMemo(() =>
    transactions.reduce((acc, { type, amount }) =>
      type === 'Expense' ? acc - amount : acc + amount, 0
    ), [transactions]
  );

  return (
    <ExpenseTrackerContext.Provider value={{
      transactions,
      balance,
      deleteTransaction,
      addTransaction,
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
