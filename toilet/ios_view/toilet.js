import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions
} from 'react-native';
import TWebView from './TWebView'
export default class Toilet extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <TWebView url={'http://192.168.10.197:5500/toilet/ios_view/near.html'}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 60,
        color: 'red'
    }
})