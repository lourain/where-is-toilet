import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Setting extends Component{
    constructor(){
        super()
    }
    render() {
        return (
            <View>
                <Text  style={styles.text}>
                    Setting
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:{
        fontSize:60
    }
})