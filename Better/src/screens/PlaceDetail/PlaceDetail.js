
import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet,Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = props => {
    return (

    <View style={styles.container}>
        <Image source={props.selectedPlace.image} style={styles.placeImage}></Image>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        <View style={styles.deleteButton}>
            <TouchableOpacity onPress={props.onItemDeleted}>
                <View>
                <Icon size={50} color="red" name="ios-trash"></Icon>
                </View>
            </TouchableOpacity>
        </View>
    </View>

    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios') ? 54 : 5,
    },
    placeImage:{
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight:"bold",
        textAlign:'center',
        fontSize: 28
    },
    deleteButton:{
        alignItems:'center'
    }
  });
export default placeDetail;