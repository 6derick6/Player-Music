import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Player() {

    return(
        <View style={styles.player}>
            <TouchableOpacity style={{marginRight:20,marginLeft:20}}>
                <AntDesign name='banckward' size={35} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight:20,marginLeft:20}}>
                <AntDesign name='playcircleo' size={35} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight:20,marginLeft:20}}>
                <AntDesign name='forward' size={35} color='white' />
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    player: {
        width:'100%',
        height:100,
        position:'absolute',
        bottom:0,
        left:0,
        zIndex:999,
        backgroundColor:'#111',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }
})