// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses, totalBalance} = props
  return (
    <div className="image-container">
      <div className={`image-list-container ${'balanceImgCard'}`}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="yourText">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className={`image-list-container ${'incomeImgCard'}`}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="yourText">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className={`image-list-container ${'expenseImgCard'}`}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="yourText">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
