import React from 'react';
import { Text, View, ToolbarAndroid, FlatList } from 'react-native';
import Dag from '../components/Dag'
import DagController from '../controllers/DagController'
import UserController from '../controllers/UserController'
import { Toolbar } from 'react-native-material-ui';

export default class DagsScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dags: [],
            loading: false,
            userId: '2845fe481e74b9010a7913d7b214a8937972d6b1',
            collegeId: '50592380-a016-4681-8622-482e5ea44b95',   
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        DagController.requestDags(this.state.userId, (elements) => {
            this.setState({
                dags: elements,
            })
            UserController.requestCollege(this.state.collegeId, this.state.userId, (userElements) => {
                this.setState({
                    people: userElements,
                })
                DagController.prepareDagsWithData(
                    this.state.userId, 
                    this.state.dags, 
                    this.state.people, (preparedDags) => {
                        this.setState({
                            dags: preparedDags,
                            loading: false
                        })
                    })
            })
        })
    }

    render(){
        if(this.state.loading){
            return(
                <View style={{paddingTop: 24}}>
                    <Toolbar 
                        centerElement="Dags"
                        searchable={{
                        autoFocus: true,
                        placeholder: 'Search dags',
                        }}
                    />
                    <Text style={{textAlign:'center'}} >
                        Loading
                    </Text>
                </View>
            );
        }
        return(
            <View  style={{paddingTop: 24}}>
                <Toolbar 
                    centerElement="Dags"
                    searchable={{
                    autoFocus: true,
                    placeholder: 'Search dags',
                    }}
                />
                <View>
                    <FlatList 
                        data={this.state.dags}
                        renderItem={
                            ({item}) => <Dag
                                name={item.description}
                                message={item.type}
                                avatar={item.avatar}
                            >
                            </Dag>
                        }
                    />
                </View>
            </View>
        );
    }
}