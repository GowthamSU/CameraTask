import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from '@react-navigation/native';

export const ScreenTwo = () => {
    const route = useRoute();
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Captured Image
            </Text>
            <Image style={styles.image} source={{ uri: route.params.image }} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    text: {
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
        margin: 10,
    },
    image: {
        width: 300,
        height: 500,
        borderRadius: 20,
    },

});
