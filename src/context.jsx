import { createContext, useContext, useEffect, useState } from "react";
import App from "./App";
import fetchBreeds from "./utilities/fetchBreeds";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [pageNum, setPageNum] = useState(0)
  const [showBreeds, setShowBreeds]=useState([])
  const [openModal, setOpenModal]=useState(false)

  useEffect(()=>{
    if(breeds.length>0){
    const num = Math.ceil(breeds.length / 12);
    const lastItem = currentPage * 12;
    const firstItem = lastItem - 12;
    const newBreeds=breeds.slice(firstItem, lastItem)
    setShowBreeds(newBreeds)
    setPageNum(num)
    }
  }, [currentPage, breeds])

  useEffect(() => {
    const localBreeds = JSON.parse(localStorage.getItem("breeds"));
    if (localBreeds) {
      setBreeds(localBreeds);
    } else {
      fetchBreeds(setBreeds);
    }
  }, []);
  return (
    <GlobalContext.Provider value={{ breeds, selectedBreed, setSelectedBreed, currentPage, setCurrentPage, pageNum, showBreeds, openModal, setOpenModal }}>
      <App />
    </GlobalContext.Provider>
  );
};
export default AppContext;
