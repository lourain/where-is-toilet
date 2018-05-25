import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    NavigatorIOS
} from 'react-native';

import Category from './read/category'
import List from './read/list'
import Search from './read/search'
import Topic from './read/topic'
import Recommend from './read/recommend'

const Hr = () => {
    return (
        <View>
            <View style={styles.Hr}></View>
        </View>
    )
}

class ReadView extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
            getdata:{}

        }
    }
    //fetch 请求数据
    componentDidMount() {
        fetch('http://localhost:3000/data/read?type=config')
            .then(data => {
                return data.json()
            })
            .then(json => {
                this.setState({
                    getdata: json.data,
                    isShow: true
                })
            })
        
    }
    render() {
        // console.warn(this.props);
        
        const { isShow } = this.state
        const {recommendTopic,hotTopic,other,category} = this.state.getdata
        return (
            <View>
                <Search />
                {
                    isShow ? <ScrollView>
                        <Hr />
                        <Topic recommendTopic={recommendTopic} navigator={this.props.navigator}/>
                        <Hr />
                        <Recommend hotTopic={hotTopic} navigator={this.props.navigator}/>
                        <Hr />
                        <Category navigator={this.props.navigator} category={category}/>
                        <Hr />
                        <Recommend other={other} navigator={this.props.navigator}/>
                    </ScrollView>
                        : null
                }

            </View>
        )
    }
}

export default class Read extends Component {
    
    render() {

        return (
            <NavigatorIOS
                initialRoute={{
                    component: ReadView,
                    title: '阅读',
                }}
                style={{ flex: 1 }}
                barTintColor='skyblue'
                navigationBarHidden={true}
            />
        );
    }
}
const styles = StyleSheet.create({
    Hr: {
        height: 1,
        backgroundColor: '#ccc',
        marginTop: 20
    }
})