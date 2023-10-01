import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,SafeAreaView,Platform,StatusBar, FlatList } from 'react-native';
import{RFValue} from 'react-native-responsive-fontsize'

let Posts=require('./temp_post.json')
import PostCard from './PostCard';
export default class Feed extends Component {
    constructor(){
        super()
        this.state={}
    }
    renderItem=({item:post})=>{
        return <PostCard post={post}/>
    }
    keyExtractor=(item,index)=>index.toString()
    render() {
        return (
            <View style={styles.feed}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>

                <View style={styles.appIcon}>
                        <Image source={require('../assets/logo.png')}style={styles.iconImage}>

                        </Image>

                    </View>
                <View style={styles.appTitleContainer}>
                    
                    <Text style={styles.appTitleText}>
                    Spectagram
                    </Text>
                </View>
                    
                </View>
                <View style={styles.cardContainer}>
                    <FlatList keyExtractor={this.keyExtractor}
                    data={Posts}
                    renderItem={this.renderItem}
                />
                </View>
            
                
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    feed:{
        flex: 1,
        
    },
    droidSafeArea:{
        marginTop:Platform.OS==='android'? StatusBar.currentHeight:RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:'row',
        
    },
    appIcon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'
    },
    iconImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
    appTitleContainer:{
        flex:0.8,
        justifyContent:'center'
    },
    appTitleText:{
        color:'white',
        fontSize:RFValue(28),

    
    },
    cardContainer:{
        flex:0.85,
    },
})  