import React, {useReducer} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import FormPage from './components/FormPage';
import Navbar from './components/Navbar';
import ReportPage from './components/ReportPage';
import { initState, reducer } from './reduce';


export const MyContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  

  return (
    <Router>
      <Navbar />
      
      <MyContext.Provider value={{state, dispatch}} >
        <Route exact path="/report" component={ReportPage} />
        <Route exact path="/" component={FormPage} />
      </MyContext.Provider>  
    
    </Router>
  );
}

export default App;
