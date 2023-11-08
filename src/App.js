import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { Register } from './components/register'
import { Login } from './components/login'
import { User } from './components/user'
import { Table } from './components/table'
import { Tables } from './components/tables'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='register' element={ <Register /> }></Route>
          <Route path='login' element={ <Login /> }></Route>
          <Route path='user' element={ <User /> }>
            <Route path='tables' element={ <Tables /> }> </Route>
            <Route path='tables/:tablename' element={ <Table /> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
