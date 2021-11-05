import './App.css';
import { Fragment } from 'react';
import Header from './Layout/Header';
import Image from './Components/image/Image';
import Clouds from './Components/Clouds/clouds';

// import DaysReport from './Components/DaysReport'

function App() {
  return (
    <Fragment>
      {/* <DaysReport/> */}
      {/* <Graph/> */}
      <Header/>
      <Image/>
       
      <Clouds/>
    </Fragment>
  );
}

export default App;
