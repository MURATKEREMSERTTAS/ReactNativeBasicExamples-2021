import React, {useState} from 'react';
import { View,Image,StyleSheet,useWindowDimensions} from 'react-native';
import Logo from '../../assets/trakya-universitesi-logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
const [Username,setUsername]=useState('');
const [password,setPassword]=useState('');
const onSignInPressed =()=>{
    console.warn("Sign In")
}
const onForgotPassword =()=>{
    console.warn("onForgotPasswordPressed")
}
const onSingUpPressed =()=>{
    console.warn("onSignUpPressed")
}

const {height} = useWindowDimensions();

    return (
    <View style={styles.root}>
            <Image source={Logo} 
            style= {[styles.logo,{height:height*0.3}]} 
            resizeMode="contain"/>

            <CustomInput 
            placeholder="Username"
            value={Username}
            setValue={setUsername}
            />
            <CustomInput 
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            />
            
            <CustomButton
             text="Sign In"
             onPress={onSignInPressed}
            />

            <CustomButton
             text="Forgot Password?"
             onPress={onForgotPassword}
             type="TERTIARY"
            />
            <CustomButton
             text="Don't have an account? Create One"
             onPress={onSingUpPressed}
             type="TERTIARY"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding: 20,
        backgroundColor: '#F9FBFC',
        height:"100%"
        
    },
    logo:{
        width:'70%',
        maxWidth: 500,
        maxHeight:300,
        marginBottom:50
    }
})

export default SignInScreen
