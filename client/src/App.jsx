
import { Navbar, Services, Loader, Transaction, Welcome, Footer } from './components';

import React from 'react'

// Basic file structure
const App = () => {
  return (
    <div className='min-h-screen'> 
      <div className='gradient-bg-welcome'> 
      <Navbar /> 
      <Welcome />
      </div>
      <Services /> 
      <Transaction />
      <Footer /> 
    </div>
  );
}

export default App;
