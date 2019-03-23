import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = (props) => (
    <Text
        {...props}
        style={styles.masterStyle}>{props.children}</Text>
);
const styles = StyleSheet.create({
    masterStyle:{
        color: "#000",
        backgroundColor:"transparent"
    }
});

export default mainText;