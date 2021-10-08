import React from 'react'
import { CakeContainer } from "./components/CakeContainer"
import { IcecreamContainer } from './components/IcecreamContainer';
import { NewContainer } from './components/NewContainer';

const App = () => {
  console.log("app");
  return (
    <div className = "App">
      <CakeContainer />
      <IcecreamContainer />
      <NewContainer />
    </div>
  )
}

export default App


