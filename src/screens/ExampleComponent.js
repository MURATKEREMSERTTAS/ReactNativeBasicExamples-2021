import React from "react";
import {Text,View,StyleSheet} from 'react-native';

const ExampleComponent  = () =>{

    const greeting = <Text>Hi There!</Text>;
    return( 
    <View> 
        <Text style={style.textStyle}>Example component</Text>
        {greeting}
    </View>
    );
}

var style = StyleSheet.create({

    textStyle : {
        fontSize:40    
    }
    
});

export default ExampleComponent;
