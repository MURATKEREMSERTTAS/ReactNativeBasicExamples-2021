import React,{useState} from "react";
import { View,Text, StyleSheet, Button } from "react-native";

const CounterScreen = () =>{
    const[counter,setCounter] = useState(0);
    return (
        <View>
            <Button 
            title="Arttır" 
            onPress={()=>{
                setCounter(counter + 1);
            }}/>
            <Button 
            title="Azalt"
            onPress={()=>{
                setCounter(counter - 1);
            }}/>
            <Text>{counter}</Text>
        </View>
    );

};

const styles = StyleSheet.create({});

export default CounterScreen;