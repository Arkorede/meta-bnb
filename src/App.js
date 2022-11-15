import './App.css';
import './queries.css';
import Header from './Components/Header'
import Hero from './Components/Hero'
import Featured from './Components/Featured'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
    </div>
  );
}

export default App;
