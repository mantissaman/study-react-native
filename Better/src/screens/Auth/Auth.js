import React, { Component } from 'react';
import { View,  Button,  StyleSheet, ImageBackground} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBG from '../../components/UI/ButtonWithBG/ButtonWithBG';
import bgImage from "../../assets/bg.jpg"

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.bgImage}>
            <View style={styles.container}>
            
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
                <ButtonWithBG color="#29aaf4" onPress={()=> alert("Hello")}>Switch to Login</ButtonWithBG>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your E-Mail Address" style={styles.input}></DefaultInput>
                    <DefaultInput placeholder="Password" style={styles.input}></DefaultInput>
                    <DefaultInput placeholder="Confirm Password" style={styles.input}></DefaultInput>
                </View>
                <ButtonWithBG color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBG>
                
            </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, //take all available space
        justifyContent: "center",
        alignItems: "center" //cross flex direction
    },
    inputContainer:{
        width:"80%"
    },
    input :{
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    bgImage :{
        width:"100%",
        flex: 1
    }
});

export default AuthScreen;