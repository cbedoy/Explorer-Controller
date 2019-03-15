import React from 'react';
import { debuglog } from 'util';


export default class ExplorerController{
    
    static requestExplorer(userId, callback){
        let url = 'http://ec2-52-8-197-192.us-west-1.compute.amazonaws.com:10010/api/resources?userId='+userId+'&schoolWide=true&limit=20&offset=0'
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            callback(res)
        })
        .catch((error) => {
            
        });
    }
}