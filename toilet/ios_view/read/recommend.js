import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import TWebView from '../TWebView'
var { width } = Dimensions.get('window')
export default class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotTopic: props.hotTopic,
            other:props.other
        }
    }
    render() {
        const { hotTopic ,other} = this.state
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text>热门推荐</Text>
                </View>
                <View style={styles.img_view}>
                    {
                       hotTopic && hotTopic.map((item, index) => {
                            return (
                                <TouchableOpacity style={styles.img_item} key={index} onPress={this._jumpTo.bind(this,item.url,item.title)}>
                                    <Image style={styles.img} source={{ uri: item.img }} />
                                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <View style={styles.img_view}>
                    {
                       other && other.map((item, index) => {
                            return (
                                <TouchableOpacity style={styles.img_item} key={index} onPress={this._jumpTo.bind(this,item.url,item.title)}>
                                    <Image style={styles.img} source={{ uri: item.img }} />
                                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

            </View>
        )
    }
    _jumpTo(url,title){
        this.props.navigator.push({
            component:TWebView,
            barTintColor:"coral",
            navigationBarHidden:false,
            title:title,
            passProps:{
                url:url
            }
        })
    }
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    img_view: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-around'
    },
    img_item: {
        width:(width-30)/4,
        height: 120
    },
    img: {
        width: (width - 30) / 4,
        height: 75
    },
    title: {
        textAlign: 'center',
        marginTop: 8,
        color: '#818181',
        fontSize: 13
    }


})