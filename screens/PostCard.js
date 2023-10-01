import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize' 
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PostCard extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                    <View style={styles.imageContainer}>
                            <Image source={require('../assets/profile_img.png')} style={styles.profileImage}/>
                        </View>
                        <View style={styles.authorNameContainer}>
                                <Text style={styles.authorNameText}>
                                    {this.props.post.author}
                                </Text>
                        </View>
                    </View>
                    <Image source={require('../assets/post.jpeg')} style={styles.postImage}/>

                   <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                   </View>

                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
container:{
flex:1,
},
cardContainer:{
    margin:RFValue(13),
    backgroundColor:'#2a2a2a',
    borderRadius:RFValue(20),
    padding:RFValue(20),
},
authorContainer:{
    flex:0.1,
    flexDirection:'row',

},
imageContainer:{
    flex:0.15,
    justifyContent:'center',
    alignItems:'center',
},
profileImage:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
    borderRadius:RFValue(100),
    
},
authorNameContainer:{
    flex:0.85,
    justifyContent:'center',
},
authorNameText:{
    color:'white',
    fontSize:RFValue(20),
},
postImage:{
    marginTop:RFValue(20),
    resizeMode:'contain',
    width:'100%',
    alignSelf:'center',
    height:RFValue(275),
},
captionContainer:{

},
captionText:{
    fontSize:13,
    color:'white',
    paddingTop:RFValue(10),
},

}
)