import {Header} from "./components/Header"
import Balance from "./components/Balance";
import Income from "./components/Income";
import TransactionList from "./components/TransactionList";
import './App.css';
import AddTransaction from "./components/AddTransaction";
import { createContext, useState } from "react";
import {GlobalProvider} from "./context/GlobalState"




function App() {
  return (
    <GlobalProvider>
   <div >
      <Header />
      <div className="container">
        <Balance/>
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>

    </div>
    </GlobalProvider>
  );
}

export default App;
