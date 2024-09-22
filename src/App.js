import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.js";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector, } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading,ReloadData } from "./redux/rootSlice.js";
import Admin from "./pages/Admin/index.js";
import Login from "./pages/Admin/Login.js";

function App() {
 const {loading , portfolioData,reloadData} = useSelector((state)=>state.root);
const dispatch = useDispatch();
const getportfolioData = async ()=>{

  try{
    dispatch(ShowLoading());
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/portfolio/get-portfolio-data`);
    dispatch(SetPortfolioData(response.data));
    dispatch(ReloadData(false));
    dispatch(HideLoading())
  }catch(error){
    dispatch(HideLoading());
  }
} 

  useEffect(()=>{
    if(!portfolioData){
      getportfolioData();
    }
  },[portfolioData]);

  useEffect(()=>{
    if(reloadData){
      getportfolioData();
    }
  },[reloadData])


  return (
    <BrowserRouter>
    {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/admin-login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
