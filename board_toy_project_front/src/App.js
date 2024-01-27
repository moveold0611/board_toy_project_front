import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import RootLayout from './component/Root/Layout/RootLayout';
import { reset } from './style/reset';
import Home from './pages/Home/Home';


function App() {

  return (
    <RootLayout styles={reset}> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </RootLayout>
  );
}

export default App;
