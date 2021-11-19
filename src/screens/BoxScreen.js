import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const BoxScreen = ()=>{
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child 1</Text>
        <Text style={styles.textStyle}>Child 22222</Text>
        <Text style={styles.textStyle}>Child 3333333</Text>
        <Text style={styles.textStyle}>Child 4444444444</Text>
    </View>
};

const styles=StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor: 'black',
        alignItems:'center',
        flexDirection:'row'
    },
    textStyle:{
        borderWidth:1,
        borderColor:'red',
        
    }
});
export default BoxScreen;

