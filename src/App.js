import logo from './logo.svg';
import AddBook from './Addbook';
import ShowTable from './ShowTable';
import Search from './Search';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Library System
      </header>
      <AddBook />
      <Search />
      <ShowTable />
    </div>
  );
}

export default App;
