import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { Feather } from '@expo/vector-icons';

export function MoreCard(){
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.profileInfo}>
                        <Image source={require('../assets/User.png')} style={styles.userPhoto}/>
                        <Image source={require('../assets/User.png')} style={styles.userPhoto2}/>
                    <Text style={styles.findMore}>Find more peoples to follow</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.seeAllButton}>
                <Text style={styles.buttonText}>See all</Text>
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
        marginRight: 10,
        paddingHorizontal: 10
    },

    profileInfo: {
        marginTop: 12
    },

    userPhoto: {
        width: 120,
        height: 120,
        borderRadius: 35,
        left: 15
    },

    userPhoto2: {
        width: 120,
        height: 120,
        borderRadius: 35,
        position: 'absolute',
        left: 45,
        top: 20
    },

    findMore: {
        fontWeight: '600',
        fontSize: 15,
        marginTop: 8,
        marginTop: 25,
        textAlign: 'center'
    },

    userStatus: {
        fontWeight: '400',
        fontSize: 13,
        color: '#00000080'
    },

    seeAllButton: {
        backgroundColor: "#c2bdb9",
        width: 182,
        height: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        marginTop: 18
    },

    buttonText: {
        fontWeight: '600',
        color: 'black'
    }
})