// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDelete} = props
  const {titleInput, amountInput, type} = transaction
  return (
    <li className="history-list-items">
      <p className="history-list-title">{titleInput}</p>
      <p className="history-list-amount">Rs {amountInput}</p>
      <p className="history-list-type">{type}</p>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
