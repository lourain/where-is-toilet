import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import List from './list'
var { width } = Dimensions.get('window')
export default class Category extends Component {
    constructor() {
        super()
    }
    _gotoList(title) {
        let type = this._getType(title)
        let url = `http://localhost:3000/data/read?type=${type}`
        this.props.navigator.push({
            component: List,
            title: title,
            barTintColor: '#996699',
            navigationBarHidden: false,
            passProps:{
                url:url
            }
        })
    }
    _getType(title) {
        let name = ''
        switch (title) {
            case '互联网':
                name = 'it'
                break;
            case '笑话':
                name = 'cookie'
                break;
            case '散文':
                name = 'sanwen'
                break;
            case '管理':
                name = 'manger'
                break;
        }
        return name
    }
    render() {
        const { category } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Categorys
                </Text>
                <View style={styles.row}>
                    {
                        category.map((item, index) => {
                            return (
                                <View key={index}>
                                    <TouchableOpacity style={styles.item} onPress={this._gotoList.bind(this, item.text)}>
                                        <Text>{item.text}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    text1: {
        color: '#5e5e5e',
        marginBottom: 5,
        fontSize: 16
    },
    item: {
        height: 53,
        width: (width - 30) / 2,
        borderColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})