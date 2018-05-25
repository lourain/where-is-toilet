import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
var {width} = Dimensions.get('window')
export default class List extends Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
        }

    }
    componentWillMount() {
        let data = []
        let url = this.props.url
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
               this.setState({
                   data:json.data
               })
            })
    }
    _renderList({item}) {

        return (
            <View style={styles.item}>
                <View>
                    <Image style={styles.img} source={{ uri: item.img }} />
                </View>
                <View>
                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                    <Text>{item.time}</Text>
                </View>
            </View>
        )
    }
    render() {
        const { data } = this.state
        return (
            <FlatList
                data={data}
                renderItem={this._renderList}
                keyExtractor={(item,index)=>item.id}//添加key，去除告警
            />
        )
    }
}
const styles = StyleSheet.create({
    item: {
        flexDirection:'row',
        padding:10,
        borderBottomColor: 'skyblue',
        borderWidth: 1
    },
    img:{
        width:70,
        height:70
    },
    title:{
        width:width-80
    }
})