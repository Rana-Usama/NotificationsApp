import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function MainScreen(props) {

    return (
        <Screen style={styles.screen}>

            {/* Logo */}
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

            <Text style={styles.text} >
                Notifications active
            </Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.lightWhite
    },
    logo: {
        marginTop: RFPercentage(-2.5),
        width: RFPercentage(26),
        height: RFPercentage(26)
    },
    text: {
        color: Colors.black,
        fontSize: RFPercentage(2.6),
        left: RFPercentage(1.6),
        fontWeight: '500'
    }
})

export default MainScreen;