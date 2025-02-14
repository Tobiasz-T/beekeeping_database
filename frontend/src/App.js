import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <header className="App-header">
        <>
          
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/form' element={<Form/>}/>
            </Routes>
          
        </>
      </header>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
