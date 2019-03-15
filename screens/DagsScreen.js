import React from 'react';
import { Text, View, ToolbarAndroid } from 'react-native';
import Dag from '../components/Dag'
import { Toolbar } from 'react-native-material-ui';

export default class DagsScreen extends React.Component{
    render(){
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
                    <Dag 
                        name="Carlos Bedoy" 
                        message="Ut enim ad minim veniam, quis nostru"
                        avatar="https://instagram.fntr2-1.fna.fbcdn.net/vp/67bce70dc9fd981d9d8b43f80d1182da/5D15F205/t51.2885-19/s150x150/52034018_402293763857006_4024521009326456832_n.jpg?_nc_ht=instagram.fntr2-1.fna.fbcdn.net" />
                    <Dag 
                        name="Vanessa Donato" 
                        message="Excepteur sint occaecat cupidatat non proident" 
                        avatar="https://instagram.fntr2-1.fna.fbcdn.net/vp/65b014d2173af4e1add1b0a7091ee65a/5D260C6C/t51.2885-19/s150x150/37853451_447968659050097_2470769469912252416_n.jpg?_nc_ht=instagram.fntr2-1.fna.fbcdn.net" />
                    <Dag 
                        name="Karen Dominguez" 
                        message="Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
                        avatar="https://instagram.fntr2-1.fna.fbcdn.net/vp/a766275f52ea622764b89b2bcb6463dd/5D28D61C/t51.2885-19/s150x150/50481264_299253827449348_6030724379594194944_n.jpg?_nc_ht=instagram.fntr2-1.fna.fbcdn.net"  />
                </View>
            </View>
        );
    }
}