import React from 'react';
import { Text, View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class ExplorerScreen extends React.Component{
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