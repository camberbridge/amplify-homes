import './App.css';
import { FAQItemCollection, NavBar, FAQTitle } from './ui-components'

import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react'; // 認証に必要

import Amplify, { Storage } from 'aws-amplify';

import { DataStore } from '@aws-amplify/datastore';
import { Home } from './models';

import amplify from './aws-exports';


const s3_bukcet = amplify.aws_user_files_s3_bucket;
Amplify.configure({
    Storage: {
        AWSS3: {s3_bukcet, //REQUIRED -  Amazon S3 bucket name
            region: 'us-east-1', //OPTIONAL -  Amazon service region
        }
    }
});

function htmlTemplate(fileName, mp3URL, uid){
  const text = '<div class="amplify-flex amplify-collection"><div class="amplify-flex amplify-collection-items" style="flex-direction: column; justify-content: stretch;"><div style="align-items: center; align-self: stretch; background-color: rgb(255, 255, 255); flex-direction: row; gap: 0px; height: 70px; padding: 24px; position: relative; flex-shrink: 0;" class="amplify-flex"><div style="flex-direction: column; gap: 16px; height: 46px; padding: 0px; position: relative; flex-shrink: 0; width: 964px;" class="amplify-flex"><p style="align-self: stretch; color: rgb(0, 0, 0); flex-direction: column; display: flex; font-family: Inter; font-size: 16px; font-weight: 700; justify-content: flex-start; line-height: 24px; padding: 0px; position: relative; flex-shrink: 0; text-align: left; width: 964px;" class="amplify-text">　■ '+fileName+'</p></div><div style="flex-direction: column; gap: 16px; height: 46px; padding: 0px; position: relative; flex-shrink: 0; width: 97px;" class="amplify-flex"><p style="align-self: stretch; color: rgb(0, 0, 0); flex-direction: column; display: flex; font-family: Inter; font-size: 16px; font-weight: 700; justify-content: flex-start; line-height: 24px; padding: 0px; position: relative; flex-shrink: 0; text-align: left; width: 97px;" class="amplify-text">'+'<a href="'+mp3URL+'">'+'Download MP3</a>'+'</p></div><div style="flex-direction: column; gap: 16px; height: 46px; padding: 0px; position: relative; flex-shrink: 0; width: 97px;" class="amplify-flex"><p style="align-self: stretch; color: rgb(0, 0, 0); flex-direction: column; display: flex; font-family: Inter; font-size: 16px; font-weight: 700; justify-content: flex-start; line-height: 24px; padding: 0px; position: relative; flex-shrink: 0; text-align: left; width: 97px;" class="amplify-text"><button id="'+uid+'" onClick="deleteDDBItem(this);">Delete</button></p></div></div><hr style="align-self: stretch; flex-shrink: 0; width: 1280px;" aria-orientation="horizontal" class="amplify-divider" data-size="small"></div></div>';
  return(text);
}

console.log('#testId#: ', amplify.testId);

var htmlTexts = '';
var AWS = require("aws-sdk");
function init(){
  AWS.config.update({
    region: "us-east-1",
    // accessKeyId: amplify.testId,
    // secretAccessKey: amplify.testKey
    accessKeyId: process.env.TEST_ID,
    secretAccessKey: process.env.TEST_KEY
  });
  const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
  const TABLE_NAME = process.env.DDB_TABLE;

  // DynamoDB scanで必要なパラメータ
  let params = {
    TableName : TABLE_NAME,
  };

  // scanの実行(非同期で実行され、コールバックで結果を受ける)
  // https://qiita.com/kenbou/items/2060e11293c857148331
  var doc_list = [];
  docClient.scan(params, function(err, data) {
      if (err) {
        // エラー時の処理を記述
        console.log("エラー = " + err);
      } else {
        // 成功時の処理を記述(取得結果はdataに格納される)
        //console.log("成功 = " + JSON.stringify( data ));
        data.Items.forEach(dt => {
              console.log('File name : ' + dt.address);
              console.log('MP3 file URL : ' + dt.image_url);
              console.log('createdAt : ' + dt.createdAt);
              console.log('uid : ' + dt.id);
              doc_list.push({'doc':{'file_name':dt.address, 'mp3_url':dt.image_url, 'create_at':dt.createdAt, 'uid':dt.id}});
        });
        var doc_list_r = doc_list.sort((d, next_d)=>{
          return d.doc.create_at > next_d.doc.create_at ? -1 : 1;
        });
        doc_list_r.forEach(dt => {
          const mp3_url = dt.doc.mp3_url
          console.log('=========');
          console.log(mp3_url);
          htmlTexts += htmlTemplate(dt.doc.file_name, mp3_url, dt.doc.uid);
        });
      }

      document.getElementById('hogehoge').innerHTML = htmlTexts;
  });
}



// function deleteDDBItem(element){
//   //https://www.wakuwakubank.com/posts/670-nodejs-dynamodb/
//   const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
//   const TABLE_NAME = amplify.ddbTable;

//   // Following, query an item.
//   var params = {
//     TableName : TABLE_NAME,
//     FilterExpression: 'image_url = :image_url',
//     ExpressionAttributeValues: { ':image_url': 'https://1.bp.blogspot.com/-CKc-Trn35FE/X9lJKrd_jeI/AAAAAAABc1w/GbDHjFtUzDY6OZRl1FnS3FQVwJz2Scl7gCNcBGAsYHQ/s180-c/animal_black_sheep_hitsuji.png' }
//   };
//   docClient.scan(params, (err, data) => {
//     console.log('DDBクエリライン');
//     if (err) console.log(JSON.stringify(err, null, 2))
//     else console.log(JSON.stringify(data, null, 2))
//   });

//   // Following, delete an item.
//   params = {
//     TableName : TABLE_NAME, // テーブル名
//     Key:{
//       id: element.id
//     }
//   };
//   docClient.delete(params, (err, data) => {
//     console.log('DDB削除ライン');
//     if (err) console.log(JSON.stringify(err, null, 2))
//     else console.log(JSON.stringify(data, null, 2))
//   });
// }

var flag = true;

function App() {
  if(flag){
    init();
    flag = false;
  }

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
      <p id='hogehoge'></p>
    </div>
  );
}

//export default App;
export default withAuthenticator(App); // 認証に必要


