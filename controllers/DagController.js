import React from 'react';
import { debuglog } from 'util';

export default class DagController {
    
    static requestDags(userId, callback){
        let url = 'http://ec2-52-8-197-192.us-west-1.compute.amazonaws.com:10010/api/user/'+userId+'/conversations'
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            callback(res)
        })
        .catch((error) => {
            
        });
    }

    static requestCollege(collegeId, userId, callback){
        /*
        {
            "id": "e07f8d615befc728806de0a0014a9206d5ba8436",
            "email": "nmng@dagm8.com",
            "type": "normal",
            "firstname": "Nicole",
            "lastname": ".",
            "avatar": "https://s3-us-west-1.amazonaws.com/dagm8-ucsc/ucsc.dagm8.com/profile/e07f8d615befc728806de0a0014a9206d5ba8436.png?updated=1512780382653",
            "favorite": false,
            "name": "Nicole ."
        }
        */

        let url = 'http://ec2-52-8-197-192.us-west-1.compute.amazonaws.com:10010/api/college/'+collegeId+'/directory?user_id='+userId
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            let map = new Map();
            res.forEach(user => {
                map.set(user.id, user)  
            });
            callback(map)
        })
        .catch((error) => {
            console.error(error)
        });
    }

    static prepareDagsWithData(userId, dags, people, callback){
        dags.forEach(dag => {
            if(dag.type == 'p2p'){
                let description = dag.description;
                let elements = description.split(' and ');
                let indexOf = elements.indexOf(userId);
                if(indexOf > -1){
                    elements.splice(indexOf, 1);
                }    
                let user = people.get(elements[0]);
                dag.avatar = user.avatar;
                dag.description = user.name;
            }   
        });
        
        dags.sort((dagOne, dagTwo) => {
            return  dagOne.description.charAt(0) > dagTwo.description.charAt(0);
        })
        
        callback(dags);
    }
}

