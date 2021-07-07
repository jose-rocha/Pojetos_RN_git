import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home(){
    return(
        <View style={styles.Container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})