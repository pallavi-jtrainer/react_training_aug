// import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      {/* <header className="App-header">
       
      </header> */}
      <Router>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>All Todos</Link>
            </li>
            <li className='nav-item'>
              <Link to='/add' className='nav-link'>Add New Todo</Link>
            </li>
          </div>
        </nav>
        <div className='container'>
          <Routes>
            <Route path="/" element={<TodoList />}></Route>
            <Route path='/add' element={<AddTodo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
