import React, {createContext, useContext, useState, useEffect} from 'react';
const dimensionsContext = createContext();
const winDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const DimensionsProvider = ({children}) => {
  const [dimensions, setDimensions] = useState(winDims);
  useEffect(() => {
    const handleResize = () => {
      setDimensions(winDims);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <dimensionsContext.Provider value={dimensions}>
      {children}
    </dimensionsContext.Provider>
  );
};

export default DimensionsProvider;

export const useDimensions = () => {
  return useContext(dimensionsContext);
};
