import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Header({search,setSearch}:any){

return(

<View style={styles.header}>

<Text style={styles.logo}>
NovaStore
</Text>

<TextInput
placeholder="Search products"
style={styles.search}
value={search}
onChangeText={setSearch}
/>

</View>

);
}

const styles = StyleSheet.create({

header:{
backgroundColor:"#111827",
paddingTop:50,
paddingHorizontal:15,
paddingBottom:15
},

logo:{
color:"#fff",
fontSize:26,
fontWeight:"bold",
marginBottom:10
},

search:{
backgroundColor:"#fff",
height:42,
borderRadius:10,
paddingHorizontal:12
}

});