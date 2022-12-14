import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'; 

// commint add shop-data.js in firebase
// import SHOP_DATA from '../shop-data.js';

 
export const CategoriesContext = createContext({ 
  categoriesMap: {},
});

export const  CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});


useEffect(() => {
  const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    console.log(categoryMap);
    setCategoriesMap(categoryMap);
  }
  getCategoriesMap();
}, []);

  //commint add documents in firebase
// useEffect(()=> {
// addCollectionAndDocuments('categories', SHOP_DATA);

// }, [])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
