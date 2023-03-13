import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid } from "react-native";
import { launchCamera } from 'react-native-image-picker';

export const ScreenOne = ({ navigation }) => {

    let details = {
        savedPhotos: true,
        mediaType: 'photo',
    };

    const onClickHandler = async () => {
        const permissionGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (permissionGranted === PermissionsAndroid.RESULTS.GRANTED) {
            const imageUri = await launchCamera(details);
            navigation.navigate('ScreenTwo', { image: imageUri.assets[0].uri });
        }
    };

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Take a Photo
            </Text>
            <TouchableOpacity
                activeOpacity={0.3}
                style={styles.button}
                onPress={onClickHandler}
            >
                <Text style={styles.text}>
                    Camera
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
        margin: 10,
    },
    button: {
        backgroundColor: "#008b8b",
        alignItems: "center",
        borderRadius: 20,
        margin: 10,
        padding: 2,
    },
});
