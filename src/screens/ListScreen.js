import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: '30'},
        {name: 'Friend 2', age: '99'},
        {name: 'Friend 3', age: '32'},
        {name: 'Friend 4', age: '32'},
        {name: 'Friend 5', age: '33'},
        {name: 'Friend 6', age: '34'},
        {name: 'Friend 7', age: '21'},
        {name: 'Friend 9', age: '22'},
    
    ];


    return (
    <FlatList data={friends}
    //The keyExtractor uses a unique value already present in the list to render through unique list keys
    keyExtractor={(friend)=>friend.name}
     renderItem={({item})=>{
            //element === {item: {name:'Friend 1'}, index 0}   
           return <Text style={style.listStyle}>{item.name}-{item.age}</Text>
       }}
       />
       );
};

const style =StyleSheet.create({
    listStyle:{
        padding:80
    }
})


export default ListScreen;