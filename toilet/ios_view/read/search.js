import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Search extends Component{
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='搜素' style={styles.search_input}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
        paddingRight:10,
        marginTop:20
    },
    search_input:{
        height:35,
        borderWidth:1,
        borderColor:'#eee',
        paddingLeft:5,
        borderRadius:3,
        fontSize:15

    }
})