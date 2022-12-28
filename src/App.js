import './App.css';
import Parent from './components/Parent.js'
import Nav from './components/Nav';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Nav />
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={<Parent />}
          >
          </Route>
        </Routes>
      </Router>
    </>
  );
}


export default App;
