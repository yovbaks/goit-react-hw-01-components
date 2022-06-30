import TransactionItem from "components/TransactionItem";
import propTypes from 'prop-types'

const TransactionHistory = ({items}) => (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        {items.map(item => <TransactionItem key={item.id} item ={item} />)}
  <tbody>
    
  </tbody>
</table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
}

export default TransactionHistory;