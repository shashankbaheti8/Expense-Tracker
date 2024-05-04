import "./App.css";
import Header from "./Components/Header";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionAdd from "./Components/TransactionAdd";
import TransactionList from "./Components/TransactionList";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <IncomeExpense />
        <TransactionList />
        <TransactionAdd />
      </div>
    </GlobalProvider>
  );
}

export default App;
