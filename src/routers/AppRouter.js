import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { Form } from '../components/form';
import List from '../components/List';
import { Navbar } from '../components/NavBar';

export const AppRouter = () => {
  return (
        <Router>
          <Navbar/>
          <Routes>
              <Route path="/list" element={<List/>}/>
              <Route path="/form" element={<Form/>}/>
          </Routes>
        </Router>
  );
}

