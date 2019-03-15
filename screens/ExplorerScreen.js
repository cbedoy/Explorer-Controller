import React from 'react';
import { Text, View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import ExplorerController from '../controllers/ExplorerController'

export default class ExplorerScreen extends React.Component{

    componentDidMount(){

    }

    render(){
        return(
            <View  style={{paddingTop: 24}}>
                <Toolbar 
                    centerElement="Explorer"
                />

            </View>
        );
    }
}