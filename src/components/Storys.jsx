import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export function Storys() {
 return (
   <View style={styles.container}>
     <View style={styles.storys}>
       <TouchableOpacity style={styles.button}>
         <Image source={require("../assets/User.png")} style={styles.profilePhoto}/>
       </TouchableOpacity>
       <Text>Ian</Text>
     </View>
   </View>
 );
}


const styles = StyleSheet.create({
   container: {
    marginHorizontal: 7
 },


 storys: {
   flexDirection: "column",
   justifyContent: "center",
   alignItems: 'center',
   },

    button: {
       borderColor: 'orange',
       borderWidth: 3,
       borderRadius: 50,
 },

 profilePhoto: {
  width: 75,
  height: 75,
 },
});
