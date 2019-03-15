import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import ExplorerController from '../controllers/ExplorerController'
import UserController from '../controllers/UserController'
import {Activity, StreamApp} from 'expo-activity-feed'

export default class ExplorerScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            resources: [],
            user: new Map(),
            loading: false,
            userId: '2845fe481e74b9010a7913d7b214a8937972d6b1',
            collegeId: '50592380-a016-4681-8622-482e5ea44b95',   
        }
    }
    
    componentDidMount(){
        this.setState({
            loading: true
        })
        UserController.request
        ExplorerController.requestExplorer(this.state.userId, (data) => {
            this.setState({
                loading: false, 
                resources: data,
            })
        })
    }

    render(){
        if(this.state.loading){
            return(
                <View style={{paddingTop: 24}}>
                    <Toolbar 
                        centerElement="Explorer"
                        searchable={{
                        autoFocus: true,
                        placeholder: 'Search resources',
                        }}
                    />
                    <Text style={{textAlign:'center'}} >
                        Loading
                    </Text>
                </View>
            );
        }
        let resources = this.state.resources;
        resources.forEach(it => {
            console.log(it)
        })
        return(
            <View  style={{paddingTop: 24}}>
                <Toolbar 
                    centerElement="Explorer"
                    searchable={{
                    autoFocus: true,
                    placeholder: 'Search resources',
                    }}
                />
                <View>
                <StreamApp
                    apiKey="n6dqxby6gcfa"
                    appId="49021"
                    token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.DPPTu_CW1CYJjZo-GoERxQkD3CH8sur8t7ks4LOemV8"
                />

                <FlatList 
                    data={this.state.resources}
                    renderItem={
                        ({item}) => <Activity activity={{
                            actor: {
                                data: {
                                  name: 'Terry Walker',
                                  profileImage: 'https://randomuser.me/api/portraits/women/48.jpg',
                                },
                              },
                              object: 'Hey @Thierry how are you doing?',
                              verb: 'post',
                              time: new Date(),
                        }} />
                    }
                />
                </View>
            </View>
        );
    }
}