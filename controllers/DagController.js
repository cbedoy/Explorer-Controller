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

