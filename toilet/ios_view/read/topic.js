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
var { width } = Dimensions.get('window');
export default class Topic extends Component {
    constructor() {
        super()
    }
    render() {
        const {recommendTopic} = this.props
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text1}>推荐专题</Text>
                </View>
                <View style={styles.img_view}>
                    {
                        recommendTopic.map((item,index)=> {
                            return (
                                <TouchableOpacity key={index} onPress={this._jumpTo.bind(this,item.url)}>
                                    <Image resizeMode={Image.resizeMode.cover} source={{ uri: item.img }} style={styles.img} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <View>
                    <Text style={styles.text2}>查看更多同期专题&gt;</Text>
                </View>
            </View >
        )
    }
    _jumpTo(url){
        this.props.navigator.push({
            component:TWebView,
            barTintColor:"coral",
            navigationBarHidden:false,
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
        flex: 1,
        justifyContent: "space-between"
    },
    img: {
        width: (width - 30) / 2,
        height: 100,
        borderRadius: 5
    },
    text1: {
        color: '#5e5e5e',
        marginBottom: 5
    },
    text2: {
        color: '#ccc',
        marginTop: 6,
        fontSize: 15,
        fontWeight: '300',
        marginBottom: 10
    }

})