import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export function YourStory() {
 return (
   <View style={styles.container}>
     <View style={styles.storys}>
       <TouchableOpacity style={styles.button}>
         <Image source={require("../assets/User.png")} style={styles.profilePhoto}/>
         <AntDesign name="pluscircle" size={22} color="#5792E7" style={styles.addButton}/>
       </TouchableOpacity>
       <Text style={styles.name}>Seu Story</Text>
     </View>
   </View>
 );
}


const styles = StyleSheet.create({
 container: {
    justifyContent: 'center',
 },


 storys: {
   flexDirection: "column",
   justifyContent: "center",
   alignItems: 'center',
   marginLeft: 15,
   marginRight: 7
   },

 button: {
       borderRadius: 50,
       marginTop: 2
 },

 profilePhoto: {
  width: 72,
  height: 72,
 },

 addButton: {
    position: 'absolute',
    left: 48,
    top: 48,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderRadius: 10,
    borderColor: 'pink',
 },

 name: {
    marginTop: 5
 }
});
