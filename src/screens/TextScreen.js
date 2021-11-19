import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

const TextScreen = () => {
    const[name,setName] = useState(' ');
return <View>
    <Text style={styles.tittle}>ENTER PASSWORD:</Text>
    <TextInput 
    style={styles.text}
    autoCapitalize="none"
    autoCorrect={false}
    defaultValue={name}
    secureTextEntry={true}
    onChangeText={newValue=>setName(newValue)}
    />
    {name.length < 4 ? <Text>Password must be longer 4 characters</Text>: null}
    <Text>Your Password is {name} :D</Text>
</View>
};

const styles = StyleSheet.create({
    text:{
        margin:15,
        borderColor:'green',
        borderWidth:3
    },
    tittle:{
        fontSize:25
    }
});

export default TextScreen;