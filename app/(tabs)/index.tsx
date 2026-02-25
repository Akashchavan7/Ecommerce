import {
View,
FlatList,
StyleSheet,
ActivityIndicator
} from "react-native";

import { useEffect,useState } from "react";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productService";
import { useRouter } from "expo-router";

export default function HomeScreen(){

const router=useRouter();

const [products,setProducts]=useState([]);
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

const filtered=products.filter((p:any)=>
p.title.toLowerCase().includes(
search.toLowerCase()
)
);

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
showsVerticalScrollIndicator={false}
contentContainerStyle={{paddingTop:10}}
keyExtractor={(item:any)=>item.id.toString()}
renderItem={({item})=>(

<ProductCard
item={item}
onPress={()=>
router.push(`/product/${item.id}` as any)
}
/>

)}
/>

</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#eef2f7"
},

loader:{
flex:1,
justifyContent:"center",
alignItems:"center"
}

});