import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default class Dag extends React.Component{
    render(){
        let pic = {
            uri: this.props.avatar
          };

       return(
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{paddingLeft: 8, paddingTop:4, paddingBottom: 4}}>
                        <Image 
                            style={styles.avatar} 
                            source={pic} />
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.name} numberOfLines={1}>{this.props.name} </Text>
                    </View>
                </View>

                <Text style={styles.message} numberOfLines={1}>{this.props.message}</Text>
                <View style={styles.divider} />
            </View>
       );
    }
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth:1,
        width:32,
        height:32,
        backgroundColor: '#e0e0e0',
        borderRadius:16,
    },
    name: {
        color: '#333333',
        fontSize: 16,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 8,
    },
    message: {
        color: '#666666',
        fontSize: 15,
        paddingRight: 8,
        paddingLeft: 8,
    },
    divider: {
      backgroundColor: "#e0e0e0",
      height:1,
      marginLeft: 8,
    },
});
