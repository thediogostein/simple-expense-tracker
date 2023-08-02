import React, { useState } from 'react';
import styles from './AddExpense.module.css';

function AddExpense({ addExpenseHandler }) {
  const [newExpenseName, setNewExpenseName] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [newExpenseDate, setNewExpenseDate] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    addExpenseHandler(newExpenseName, newExpenseAmount, newExpenseDate);
    setNewExpenseName('');
    setNewExpenseAmount('');
    setNewExpenseDate('');
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="">Nome da conta</label>
        <input
          type="text"
          placeholder="Nome da despesa"
          onChange={(e) => setNewExpenseName(e.target.value)}
          value={newExpenseName}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Vencimento da conta</label>
        <input
          id="date"
          type="date"
          onChange={(e) => setNewExpenseDate(e.target.value)}
          value={newExpenseDate}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Valor da conta</label>
        <input
          id="amount"
          type="number"
          placeholder="Adicione o valor da despesa"
          value={newExpenseAmount}
          onChange={(e) => setNewExpenseAmount(e.target.value)}
          required
        />
      </div>
      <button className={styles['btn-add']} type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default AddExpense;
