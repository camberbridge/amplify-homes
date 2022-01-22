import './App.css';
import { FAQItemCollection, NavBar, FAQTitle } from './ui-components'

import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react'; // 認証に必要

import Amplify, { Storage } from 'aws-amplify';

import { DataStore } from '@aws-amplify/datastore';
import { Home } from './models';


function App() {

Amplify.configure({
    Storage: {
        AWSS3: {
            bucket: 'amplify-pdf-polly-storage-dzek1dcdkq2li161951-devn', //REQUIRED -  Amazon S3 bucket name
            region: 'us-east-1', //OPTIONAL -  Amazon service region
        }
    }
});

async function onChange(e) {
  const file = e.target.files[0];
  try {
    await Storage.put(file.name, file, {
      contentType: "application/pdf", // contentType is optional
    });
    alert('アップロードしました');
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
}

async function f(){
  const res = await DataStore.query(Home);
  console.log('なまろぐー');
  console.log(res);
}
f()


  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <FAQTitle width={"100vw"}/>
      <input type="file" onChange={onChange} />
      <FAQItemCollection />
//TODO: ここにDynamoを取得してlistを生成する機構を直書きする
    </div>
  );
}

//export default App;
export default withAuthenticator(App); // 認証に必要
