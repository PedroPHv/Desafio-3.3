import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'
 
const PeopleList = props => {
    const {harry, onPressItem} = props
    const items = harry.map(hp => {
          return (
            <PeopleListItem            
            hp={hp}
            onPressItemDetails={onPressItem}/>
          )}
      )
    return (
        <View style={style.container}>
            {items}
        </View>
    )
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#000000'
    },
}
)
 
export default PeopleList