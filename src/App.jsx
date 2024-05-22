import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import Header from './components/header';
import InkTec from './page/inktec';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/controle/inktec' element={<InkTec />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
