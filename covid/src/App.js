import './App.css';
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import AllCountries from './AllCountries'
import MyRecords from './MyRecords'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Header />
       <Routes>
      
        <Route 
          exact path="/"
          element={  <Home />}
        >
        </Route>
        
        <Route 
          exact path="/AllCountries"
          element={ <AllCountries />}
        >
        </Route>
        
        <Route 
          exact path="/MyRecords"
          element={ <MyRecords />}
        >
        </Route>
        
        </Routes>
        <Footer /> 
        </Router>
        </>
  );
}

export default App;
