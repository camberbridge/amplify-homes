import './App.css';
import { FAQItemCollection, NavBar, FAQTitle } from './ui-components'

import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react'; // 認証に必要

import Amplify, { Storage } from 'aws-amplify';

import { DataStore } from '@aws-amplify/datastore';
import { Home } from './models';

import amplify from './aws-exports';

function init(){
  var AWS = require("aws-sdk");
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: amplify.testId,
    secretAccessKey: amplify.testKey
  });
  const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
  const TABLE_NAME = amplify.ddbTable;

  // DynamoDB scanで必要なパラメータ
  let params = {
    TableName : TABLE_NAME, // テーブル名
  };

  // scanの実行(非同期で実行され、コールバックで結果を受ける)
  // https://qiita.com/kenbou/items/2060e11293c857148331
  docClient.scan(params, function(err, data) {
      if (err) {
        // エラー時の処理を記述
        console.log("エラー = " + err);
      } else {
        // 成功時の処理を記述(取得結果はdataに格納される)
        console.log("成功 = " + JSON.stringify( data ));
        data.Items.forEach(dt => {
              console.log('id : ' + dt.id);
              console.log('createdAt : ' + dt.createdAt);
        });
      }
  });
}
init();

function App() {
  const s3_bukcet = amplify.aws_user_files_s3_bucket;
  Amplify.configure({
      Storage: {
          AWSS3: {s3_bukcet, //REQUIRED -  Amazon S3 bucket name
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
