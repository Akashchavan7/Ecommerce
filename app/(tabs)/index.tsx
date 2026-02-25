import {
 View,
 Text,
 FlatList,
 StyleSheet,
 ActivityIndicator
} from "react-native";

import { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/api";

export default function HomeScreen() {

const [products,setProducts] = useState<any[]>([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{

loadProducts();

},[]);

const loadProducts = async ()=>{

try{

const data = await getProducts();
setProducts(data);

}catch(error){

console.log("API Error",error);

}
finally{
setLoading(false);
}

};

if(loading){

return(
<View style={styles.loader}>
<ActivityIndicator size="large"/>
</View>
);

}

return(

<View style={styles.container}>

<Text style={styles.header}>
Flipkart Store 🛒
</Text>

<FlatList
data={products}
numColumns={2}
showsVerticalScrollIndicator={false}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(

<ProductCard
item={item}
/>

)}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f1f3f6",
paddingHorizontal:8
},

header:{
fontSize:22,
fontWeight:"bold",
marginVertical:10
},

loader:{
flex:1,
justifyContent:"center",
alignItems:"center"
}

});