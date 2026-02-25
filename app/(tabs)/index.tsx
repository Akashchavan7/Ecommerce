import {
 View,
 FlatList,
 StyleSheet,
 ActivityIndicator
} from "react-native";

import { useEffect, useState, useMemo } from "react";

import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import { getProducts } from "@/services/api";
import { useRouter } from "expo-router";

export default function HomeScreen() {

const router = useRouter();

const [products,setProducts] = useState<any[]>([]);
const [loading,setLoading] = useState(true);
const [search,setSearch] = useState("");

useEffect(()=>{
 loadProducts();
},[]);

const loadProducts = async ()=>{

try{

const data = await getProducts();
setProducts(data);

}catch(e){
console.log(e);
}
finally{
setLoading(false);
}

};

/* Performance Optimization */

const filteredProducts = useMemo(()=>{

return products.filter(item =>
item.title.toLowerCase()
.includes(search.toLowerCase())
);

},[search,products]);

if(loading){

return(
<View style={styles.loader}>
<ActivityIndicator size="large"/>
</View>
);

}

return(

<View style={styles.container}>

{/*  Header */}

<Header
search={search}
setSearch={setSearch}
/>

{/* Products */}

<FlatList
data={filteredProducts}
numColumns={2}
showsVerticalScrollIndicator={false}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(

<ProductCard
item={item}
onPress={()=>router.push(`/product/${item.id}`)}
/>

)}
contentContainerStyle={{
paddingBottom:80
}}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f4f6"
},

loader:{
flex:1,
justifyContent:"center",
alignItems:"center"
}

});