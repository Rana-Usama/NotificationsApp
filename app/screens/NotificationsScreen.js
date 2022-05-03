import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import NotificationsCard from '../components/common/NotificationsCard';

//config
import { Colors } from 'react-native/Libraries/NewAppScreen';

function NotificationsScreen(props) {

    const cartData = [
        {
            id: '1',
            imageSource: require('../../assets/images/f1.png'),
            title: 'Robert Fox',
            subTitle: 'Invited you to a space "Space ABC',
            time: '5 Min'
        },
        {
            id: '2',
            imageSource: require('../../assets/images/f2.png'),
            title: 'Jacob Jones',
            subTitle: 'Sent you a file',
            onPress: true,
            time: '1 Hour'
        },
        {
            id: '3',
            imageSource: require('../../assets/images/f3.png'),
            title: 'Annete Black',
            subTitle: 'Sent you a message',
            time: '5 Hour'
        },
        {
            id: '4',
            imageSource: require('../../assets/images/f4.png'),
            title: 'Shane Martinize',
            subTitle: 'Sent you a message',
            time: '2 Day'
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* NavBar */}
            <View style={styles.navContainer}>
                <Text style={{ fontSize: RFPercentage(2.6), fontWeight: '700', color: Colors.black, position: 'absolute', left: 0 }}>
                    Notifications
                </Text>
                <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.9), fontWeight: Platform.OS == 'android' ? 'bold' : '700' }}>
                        Mark all as read
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={{ width: '100%', marginTop: RFPercentage(2) }}
                data={cartData}
                numColumns={1}
                renderItem={({ item }) =>
                    <View style={{ marginTop: RFPercentage(2), width: '100%' }}>
                        <NotificationsCard onPressCard={item.onPress} imageSource={item.imageSource} Title={item.title} subTitle={item.subTitle} time={item.time} />
                    </View>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.lightWhite,
    },
    navContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NotificationsScreen;