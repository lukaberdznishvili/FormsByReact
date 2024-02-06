import React from 'react';

import Header from './components/Header.jsx';
import StateLogin from './components/StateLogin.jsx';
import SignUp from './components/SignUp.jsx';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    
      <>
        <Header />
        <main>
          
         <Routes>
          <Route path='/' element={<StateLogin />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
         </Routes>
          
        </main>
      </>
   
  );
}

export default App;
