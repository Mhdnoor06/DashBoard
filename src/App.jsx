import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';

import Authentication from './components/auth/Authentication';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<div>this is login</div>} />
        <Route
          path="/"
          element={
            <Authentication>
              <Layout />
            </Authentication>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
