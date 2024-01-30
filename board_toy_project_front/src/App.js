import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import RootLayout from './component/Root/Layout/RootLayout';
import { reset } from './style/reset';
import { Global } from '@emotion/react';

import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Oauth2Signin from './pages/Signin/Oauth2Signin/Oauth2Signin';

function App() {

  return (
    <RootLayout> 
    <Global styles={reset}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path="/auth/oauth2/signin" element={ <Oauth2Signin /> } />
        <Route/>
        <Route/>
      </Routes>
    </RootLayout>
  );
}

export default App;
