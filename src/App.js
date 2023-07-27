import './App.css';
import { BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import { AddUser } from './components/addUser';
import { GetAll } from './components/getAll';
import { NavBar } from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>User Management Application</h1>
        <NavBar />
        <Routes>
          <Route path="/add" element={<AddUser />} />
          <Route path="/list" element={<GetAll />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
