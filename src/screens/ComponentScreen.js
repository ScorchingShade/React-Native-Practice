import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen=()=>{

    const name="ankush";
    //below is jsx syntax
    return( 
    <View>
    <Text style={styles.textStyle}>Getting Started with React Native</Text>
    <Text style={fontSize=20}>My Name is {name}</Text>
    </View>
    );

};

const styles =StyleSheet.create({

    textStyle: {
        fontSize:45
    }

});

export default ComponentsScreen;