import { View,FlatList } from "react-native";
import { useEffect,useState } from "react";
import { useLocalSearchParams,useRouter } from "expo-router";
import { getProductsByCategory } from "@/services/productService";
import ProductCard from "@/components/ProductCard";

export default function CategoryProducts(){

const {name}=useLocalSearchParams();
const router=useRouter();

const [products,setProducts]=useState([]);

useEffect(()=>{
load();
},[]);

const load=async()=>{
const data=await getProductsByCategory(name as string);
setProducts(data);
};

return(

<View>

<FlatList
data={products}
numColumns={2}
keyExtractor={(item:any)=>item.id.toString()}
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