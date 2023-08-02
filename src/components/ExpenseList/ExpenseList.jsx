import React from 'react';
import Expense from '../Expense/Expense';
import styles from './ExpenseList.module.css';

function ExpenseList({ expenses, deleteExpenseHandler }) {
  const listElements = expenses.map((expense) => (
    <Expense
      key={expense.id}
      id={expense.id}
      name={expense.name}
      date={expense.date}
      amount={expense.amount}
      deleteExpenseHandler={deleteExpenseHandler}
    />
  ));

  return <ul className={styles.ul}>{listElements}</ul>;
}

export default ExpenseList;
