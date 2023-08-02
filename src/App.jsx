import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import AddExpense from './components/AddExpense/AddExpense';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Header from './components/Header/Header';
import TotalAmount from './components/TotalAmount/TotalAmount';

import './global.css';

function App() {
  const localStorageData = JSON.parse(localStorage.getItem('expenses'));
  const [expenses, setExpenses] = useState(localStorageData || []);
  const [total, setTotal] = useState(0);

  function addExpenseHandler(name, amount, date) {
    const newExpense = {
      id: nanoid(),
      name,
      amount: +amount,
      date: new Date(date),
    };
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  }

  function deleteExpenseHandler(id) {
    const remainingExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(remainingExpenses);
  }

  useEffect(() => {
    const totalValue = expenses.length
      ? expenses.reduce((total, item) => {
          return total + item.amount;
        }, 0)
      : 0;
    setTotal(totalValue);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="wrapper">
      <Header />
      <TotalAmount total={total} />
      <AddExpense addExpenseHandler={addExpenseHandler} />
      {expenses.length ? (
        <ExpenseList
          expenses={expenses}
          deleteExpenseHandler={deleteExpenseHandler}
        />
      ) : (
        <p>Nenhuma despesa</p>
      )}
    </div>
  );
}

export default App;
