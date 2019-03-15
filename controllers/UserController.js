import React from 'react';
import { debuglog } from 'util';

export default class UserController {
    
    static requestCollege(college, user, callback){
        let url = 'http://ec2-52-8-197-192.us-west-1.compute.amazonaws.com:10010/api/college/'+college+'/directory?user_id='+user
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            let users = new Map();
            res.forEach(it => {
                users.set(it.id, it);
            });
            callback(users)
        })
        .catch((error) => {
            callback(new Map());
        });
    }

}