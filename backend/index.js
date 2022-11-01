require('dotenv').config();

const aws=require('aws-sdk')

const my_AccessKeyId=process.env.AccessKeyID;
const my_SecreteKey=process.env.SecretKey;
const listItem=process.env.todo-list-db;

const dynamodb=new AWS.DynamoDB.DocumentClient({
    accessKeyId:my_AccessKeyId,
    SecretKey:my_SecreteKey
})

async function insetDataintoDatabase(){
    let params={
        TableName:listItem,
        // Item:{
        //     id:
        // }
    }
}