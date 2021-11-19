import React from "react";
import { View,Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  console.log(props);

  return <View style={styles.viewStyle}>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        onPress={()=>props.navigation.navigate('Components')}
        title="Go to Componenst Demo"/>
      <Button 
        onPress={()=>props.navigation.navigate('CounterScreen')}
        title="Go to Counter Demo" />
      <Button 
        onPress={()=>props.navigation.navigate('ImageScreen')}
        title="Go to Image Demo" />
      <Button 
        onPress={()=>props.navigation.navigate('List')}
        title="Go to List Demo" />
      <Button 
        onPress={()=>props.navigation.navigate('ColorScreen')}
        title="Go to Color Screen" />
      <Button 
        onPress={()=>props.navigation.navigate('SquareScreen')}
        title="Go to Square Screen" />
      <Button 
        onPress={()=>props.navigation.navigate('TextScreen')}
        title="Go to Test Demo" />
      <Button 
        onPress={()=>props.navigation.navigate('Box')}
        title="Go to Box Demo" />
    </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  viewStyle:{
    paddingLeft:150,
    paddingRight:150,
    flexDirection:'column',
    borderWidth:5,
    borderColor:'black'
  }
});

export default HomeScreen;
