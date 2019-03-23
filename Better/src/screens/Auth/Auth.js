import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Platform } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch to Login"></Button>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your E-Mail Address"></DefaultInput>
                    <DefaultInput placeholder="Password"></DefaultInput>
                    <DefaultInput placeholder="Confirm Password"></DefaultInput>
                </View>
                <Button title="Submit" onPress={this.loginHandler}></Button>
            </View>
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
    }
});

export default AuthScreen;