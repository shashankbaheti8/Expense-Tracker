import './App.css';
import Balance from './Components/Balance';
import History from './Components/History';
import AddTransaction from './Components/AddTransaction';

function App() {
  return (
    <div className="App text-center">
      <h1 className="my-5">Expense Tracker</h1>
      <Balance />
      <History />
      <AddTransaction />
    </div>
  );
}

export default App;