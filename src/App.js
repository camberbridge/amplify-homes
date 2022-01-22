import './App.css';
import { FAQItemCollection, NavBar, FAQTitle } from './ui-components'

import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react'; // 認証に必要

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <FAQTitle width={"100vw"}/>
      <FAQItemCollection />
    </div>
  );
}

//export default App;
export default withAuthenticator(App); // 認証に必要
