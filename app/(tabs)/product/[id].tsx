import { View,Text,Image,StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect,useState } from "react";
import { getProductById } from "@/services/productService";

export default function Product(){

const {id}=useLocalSearchParams();
const [product,setProduct]=useState<any>();

useEffect(()=>{
load();
},[]);

const load=async()=>{
const data=await getProductById(Number(id));
setProduct(data);
};

if(!product) return null;

return(

<View style={styles.container}>

<Image
source={{uri:product.thumbnail}}
style={styles.image}
/>

<Text style={styles.title}>
{product.title}
</Text>

<Text style={styles.price}>
₹ {product.price}
</Text>

<Text>
{product.description}
</Text>

</View>

);
}

const styles=StyleSheet.create({

container:{flex:1,padding:20},

image:{
height:300,
borderRadius:12
},

title:{
fontSize:22,
fontWeight:"bold",
marginTop:10
},

price:{
fontSize:18,
color:"green",
marginVertical:10
}

});