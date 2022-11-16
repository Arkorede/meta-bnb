import './App.css';
import './queries.css';
import Header from './Components/Header'
import Hero from './Components/Hero'
import Featured from './Components/Featured'
import How from './Components/How'
import Nft from './Components/Nft'
import Footer from './Components/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <How />
      <Nft />
      <Footer />
    </div>
  );
}

export default App;
