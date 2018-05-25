import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions
} from 'react-native';
var {width,height} = Dimensions.get('window')
export default class TWebView extends Component{
    constructor(){
        super();
    }
    render() {
        // alert(this.props.url)
        return (
            <View style={styles.container}>
                <WebView source={{uri:this.props.url}} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
    }
})