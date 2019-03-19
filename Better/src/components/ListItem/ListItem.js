import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { tsPropertySignature } from '@babel/types';


const listItem  =(props) =>(
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem :{
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginBottom:5
    }
});

export default listItem;