import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    selectedOption: transactionTypeOptions[0].optionId,
    transactions: [],
    totalIncome: 0,
    totalExpenses: 0,
    totalBalance: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({selectedOption: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, selectedOption} = this.state
    const newTransaction = {
      id: v4(),
      titleInput: title,
      amountInput: parseFloat(amount),
      type: selectedOption,
    }
    this.setState(prevState => {
      const updateTransactions = [...prevState.transactions, newTransaction]
      const totalIncome = updateTransactions
        .filter(each => each.selectedOption === 'INCOME')
        .reduce((acc, each) => acc + each.amount, 0)
      console.log(totalIncome)
      const totalExpenses = updateTransactions
        .filter(each => each.selectedOption === 'EXPENSES')
        .reduce((acc, each) => acc + each.amount, 0)
      return {
        transactions: updateTransactions,
        totalIncome,
        totalExpenses,
        totalBalance: totalIncome - totalExpenses,
        title: '',
        amount: '',
        selectedOption: transactionTypeOptions[0].optionId,
      }
    })
  }

  onDeleteTransaction = index => {
    this.setState(prevState => {
      const updateTransactions = [...prevState.transactions]
      updateTransactions.splice(index, 1)
      const totalIncome = updateTransactions
        .filter(each => each.selectedOption === 'INCOME')
        .reduce((acc, each) => acc + each.amount, 0)
      const totalExpenses = updateTransactions
        .filter(each => each.selectedOption === 'EXPENSES')
        .reduce((acc, each) => acc + each.amount, 0)

      return {
        transactions: updateTransactions,
        totalIncome,
        totalExpenses,
        totalBalance: totalIncome - totalExpenses,
      }
    })
  }

  render() {
    const {
      title,
      amount,
      selectedOption,
      transactions,
      totalIncome,
      totalExpenses,
      totalBalance,
    } = this.state

    return (
      <div className="app-container">
        <div className="name-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="description">
            Welcome back to your <span className="role">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          key={selectedOption.optionId}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          totalBalance={totalBalance}
        />
        <div className="transaction-and-history-container">
          <div className="transaction-container">
            <h1 className="transaction-heading">Add Transaction</h1>
            <label htmlFor="title">
              <p className="title">TITLE</p>
              <input
                id="title"
                className="input"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />
            </label>
            <label htmlFor="amount">
              <p className="title">AMOUNT</p>
              <input
                id="amount"
                className="input"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onChangeAmount}
              />
            </label>
            <div>
              <p className="title">TYPE</p>
              <select
                label="text"
                className="input"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(option => (
                  <option key={option.optionId}>{option.displayText}</option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="button"
                className="add-btn"
                onClick={this.addTransaction}
              >
                Add
              </button>
            </div>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-list-container">
              <div className="history-list-heading-card">
                <p className="history-list-heading">Title</p>
                <p className="history-list-heading">Amount</p>
                <p className="history-list-heading">Type</p>
              </div>
              <hr />
              <ul className="unordered-list">
                {transactions.map((transaction, index) => (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onDelete={() => this.onDeleteTransaction(index)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
