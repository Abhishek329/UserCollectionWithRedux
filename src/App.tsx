import React, { useState } from 'react';
import Navbar from './app/layout/NavBar';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import { Outlet,useNavigate } from 'react-router-dom';



function App() {
  
  const navigation = useNavigate();

  const [isHidden, setIsHidden] = useState(false);

  const handleButtonClick = () => {
    setIsHidden(true);
    navigation('/users');
  };

  return (   
    <div>
      <Navbar/>
      <Provider store={Store}>   
      <div className="md:container md:mx-auto mt-4">
      <h1 className="text-4xl pt-10">Welcome to User Management Application</h1>  
      {!isHidden && (
        <div className="block">
          <button onClick={handleButtonClick} hidden={isHidden} className="bg-slate-100 shadow-md px-4 py-3">
            Check out our users...
          </button>
        </div>
      )}
      </div>      
      <Outlet />
      </Provider>
      
    </div>
    
  );
}

export default App;