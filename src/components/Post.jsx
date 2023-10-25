import React from "react"
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"

export function Post(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.profileInfo}>
                    <Image source={require('../assets/User.png')} style={styles.userPhoto}/>
                    <Text style={styles.profileName}>Dani</Text>
                </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../assets/more.png')} style={styles.moreIcon}/>
                    </TouchableOpacity>
            </View>
            <Image source={require('../assets/User.png')} style={styles.postPic}/>
            <View>
                <View style={styles.actionMenu}>
                    <View style={styles.actionButtonsView}>
                        <TouchableOpacity>
                            <Image source={require('../assets/heart.png')} style={styles.actionImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../assets/comment.png')} style={styles.actionImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../assets/message.png')} style={styles.actionImage}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../assets/save.png')} style={styles.actionImage} resizeMode="contain"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.description}>
                    <Text style={{fontWeight: 'bold'}}>102 likes</Text>
                    <Text style={{marginVertical: 8}}><Text style={{fontWeight: 'bold'}}>Dani </Text>I have filmed a small vlog of north Dhaka, and
I’m very excited to post on YouTube. 🤭 </Text>
                    <Text style={{color: '#00000080'}}>View all 25 comments</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#00000040',
        borderTopWidth: 1,
        marginVertical: 10
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginVertical: 10,
    },

    moreIcon: {
        width: 24,
        height: 24,
    },

    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    userPhoto: {
        width: 38,
        height: 38,
        borderWidth: 2,
        borderColor:'orange',
        borderRadius: 19,
    },

    profileName: {
        marginLeft: 10
    },

    postPic: {
        width: '100%',
        height: 470
    },

    actionMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },

    actionButtonsView: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    actionImage: {
        width: 24,
        height: 24
    },

    description: {
        paddingHorizontal: 16
    }
})