import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return(
     <View>
       <Text style={styles.text}>Ankush horoo</Text>
        <Button 
        onPress={()=>console.log('Button pressed')}
        title="Go to components Demo"></Button>

        <TouchableOpacity onPress={()=>{console.log('Adding touch')}}>
          <Text>
            Here is touch button
          </Text>
        </TouchableOpacity>
  </View>
  
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
