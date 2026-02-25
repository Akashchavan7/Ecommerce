import { View,FlatList,StyleSheet,ActivityIndicator } from "react-native";
import { useEffect,useState,useMemo } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productService";
import { useRouter } from "expo-router";

export default function Home(){

const router=useRouter();

const [products,setProducts]=useState<any[]>([]);
const [loading,setLoading]=useState(true);
const [search,setSearch]=useState("");

useEffect(()=>{
load();
},[]);

const load=async()=>{
const data=await getProducts();
setProducts(data);
setLoading(false);
};

const filtered=useMemo(()=>{
return products.filter(p=>
p.title.toLowerCase().includes(
search.toLowerCase()
));
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

<Header
search={search}
setSearch={setSearch}
/>

<FlatList
data={filtered}
numColumns={2}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(
<ProductCard
item={item}
onPress={()=>router.push(`/product/${item.id}`)}
/>
)}
/>

</View>

);
}

const styles=StyleSheet.create({
container:{flex:1,backgroundColor:"#f3f4f6"},
loader:{flex:1,justifyContent:"center",alignItems:"center"}
});