import React from 'react';
import styles from './Expense.module.css';

function Expense({ id, name, amount, date, deleteExpenseHandler }) {
  const day = date.toLocaleString('pt-br', { day: '2-digit' });
  const month = date.toLocaleString('pt-br', { month: 'long' });
  const year = date.getFullYear();

  return (
    <li className={styles.li}>
      <h2 className={styles['expense-name']}>{name}</h2>
      <p
        className={styles['expense-date']}
      >{`${day} de ${month} de ${year}`}</p>
      <p className={styles['expense-amount']}>R$ {amount}</p>
      <button
        className={styles['btn-delete']}
        onClick={() => deleteExpenseHandler(id)}
      >
        Deletar
      </button>
    </li>
  );
}

export default Expense;
