
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({transactions}) => {
    return (
        <table className={css.transaction}>
          <thead className={css.thead}>
            <tr className={css.tr}>
              <th className={css.titles}>Type</th>
              <th className={css.titles}>Amount</th>
              <th className={css.titles}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.data}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
            ))}
          </tbody>
        </table>
    );
}