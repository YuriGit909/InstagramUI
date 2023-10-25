import { View, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";

export function Header(){
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/add.png')} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/heart.png')} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/message.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        marginHorizontal: 9,
        marginVertical: 5,
    },

    logo: {
        width: 130,
        height: 40
    },

    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '40%',
        paddingTop: 5
    },

    button: {
        width: 16,
        height: 16
    },

    icon: {
        width: 25,
        height: 25
    },
})