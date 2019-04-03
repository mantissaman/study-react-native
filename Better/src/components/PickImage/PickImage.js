import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import imagePlaceHolder from "../../assets/beautiful-place.jpg";

class PickImage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image source={imagePlaceHolder} style={styles.previewimage}></Image>
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={() => alert('Pick Image!')}></Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    previewimage:{
        width:"100%",
        height:"100%"
    }
});

export default PickImage;