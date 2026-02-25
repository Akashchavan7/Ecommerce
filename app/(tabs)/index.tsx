import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function HomeScreen() {

const [products,setProducts] = useState<any[]>([]);

useEffect(()=>{

fetch("https://dummyjson.com/products")
.then(res=>res.json())
.then(data=>{
setProducts(data.products);
});

},[]);

return(

<View style={styles.container}>

<Text style={styles.title}>
Ecommerce Store 🛒
</Text>

<FlatList
data={products}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(

<View style={styles.card}>
<Text>{item.title}</Text>
<Text>₹ {item.price}</Text>
</View>

)}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:15
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:10
},

card:{
backgroundColor:"#fff",
padding:15,
marginBottom:10,
borderRadius:12,
elevation:5
}

});