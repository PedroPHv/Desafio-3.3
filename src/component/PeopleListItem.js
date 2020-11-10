import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {toUpperFirst} from '../util'
import Avatar from '@material-ui/core/Avatar';
 
const PeopleListItem = props => {
    const {hp, onPressItemDetails} = props   
    const {title } = hp.name
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(hp)
        }}>
        <View style={style.line}>
          
        <Avatar  src={hp.image} />
        
          
            <Text style={style.linetext}>
              {hp.name}
            </Text>            
        </View>
        </TouchableOpacity>
    )
}
 
const style = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext:{
        fontSize:20,
        paddingLeft: 20,
        flex: 7,
        color: "#DCDCDC"
        
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }
}
)

 
export default PeopleListItem









