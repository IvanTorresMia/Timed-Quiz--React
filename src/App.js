import './App.css';
import Home from './Pages/Home';
import CreateQuiz from './Pages/CreateQuiz';
import TakeQuiz from './Pages/TakeQuiz';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/CreateQuiz" component={CreateQuiz}/>
      <Route exact path="/TakeQuiz" component={TakeQuiz}/>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
