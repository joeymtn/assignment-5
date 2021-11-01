/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useState, useEffect} from 'react';

const isOpenContext = createContext();


const IsOpenProvider = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <IsOpenProvider.Provider value={{mobileOpen, handleDrawerToggle}}>
      {children}
    </IsOpenProvider.Provider>
  );
};
export default IsOpenProvider;
export const useOpen = () => {
  return useContext(isOpenContext);
};
