import { Fragment, useState } from 'react';

import DropDown from "./components/DropDown";
import Flag from "./components/Flag";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App(props) {
  const [showList, setShowList] = useState(false);

  const dropDownHandler = () => {
    setShowList(true);
  };

  return (
    <Fragment >
      <Layout />
      <Header />
      <Flag onClick={dropDownHandler} />
      {showList && <DropDown />}
    </Fragment>
  );
}

export default App;
