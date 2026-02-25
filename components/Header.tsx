import { View,TextInput,StyleSheet,Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Header({search,setSearch}:any){

return(

<LinearGradient
colors={["#4facfe","#00f2fe"]}
style={styles.header}
>

<Text style={styles.logo}>
ShopSphere
</Text>

<TextInput
placeholder="Search products..."
placeholderTextColor="#555"
style={styles.search}
value={search}
onChangeText={setSearch}
/>

</LinearGradient>

);

}

const styles=StyleSheet.create({

header:{
paddingTop:50,
paddingBottom:20,
paddingHorizontal:15,
borderBottomLeftRadius:25,
borderBottomRightRadius:25,
elevation:10
},

logo:{
color:"#fff",
fontSize:24,
fontWeight:"bold",
marginBottom:10
},

search:{
backgroundColor:"#fff",
height:45,
borderRadius:12,
paddingHorizontal:15,
elevation:6
}

});