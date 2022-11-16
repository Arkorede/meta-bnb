import './App.css';
import './queries.css';
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Place from './Routes/Place'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route exact path="/place" element={<Place />} />
          <Route exact path="/redirect" element={<Navigate to="/place" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
