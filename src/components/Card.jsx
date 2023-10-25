import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { Feather } from '@expo/vector-icons';

export function Card(){
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.profileInfo}>
                    <Image source={require('../assets/User.png')} style={styles.userPhoto}/>
                    <Text style={styles.userName}>JJ</Text>
                    <Text style={styles.userStatus}>Popular</Text>
                </View>
                <TouchableOpacity style={styles.removeIcon}>
                    <Feather name="x" size={24} color="#00000066"/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 254,
        width: 202,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#00000040',
        marginRight: 10
    },

    profileInfo: {
        alignItems: 'center',
        marginTop: 12
    },

    userPhoto: {
        width: 140,
        height: 140,
        borderRadius: 70
    },

    userName: {
        fontWeight: '600',
        fontSize: 15,
        marginTop: 8
    },

    userStatus: {
        fontWeight: '400',
        fontSize: 13,
        color: '#00000080'
    },

    removeIcon: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },

    followButton: {
        backgroundColor: "#5793EA",
        width: 182,
        height: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        marginTop: 15
    },

    buttonText: {
        fontWeight: '600',
        color: 'white'
    }
})