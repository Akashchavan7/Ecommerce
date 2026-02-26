import {
View,
FlatList,
StyleSheet,
Text,
ScrollView,
Image
} from "react-native";

import { useEffect,useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productService";
import { useRouter } from "expo-router";

export default function HomeScreen(){

const router=useRouter();

const [products,setProducts]=useState([]);
const [search,setSearch]=useState("");

useEffect(()=>{
load();
},[]);

const load=async()=>{
const data=await getProducts();
setProducts(data);
};

const filtered=products.filter((p:any)=>
p.title.toLowerCase().includes(search.toLowerCase())
);

return(

<View style={styles.container}>

<Header search={search} setSearch={setSearch}/>

<ScrollView showsVerticalScrollIndicator={false}>

<View style={styles.banner}>
<Image
source={{uri:"https://images.unsplash.com/photo-1607082349566-187342175e2f"}}
style={styles.bannerImage}
/>
</View>

<Text style={styles.sectionTitle}>
Top Deals
</Text>

<FlatList
data={filtered}
numColumns={2}
scrollEnabled={false}
keyExtractor={(item:any)=>item.id.toString()}
renderItem={({item})=>(
<ProductCard
item={item}
onPress={()=>router.push(`/product/${item.id}` as any)}
/>
)}
/>

</ScrollView>

</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#eef2f7"
},

banner:{
margin:15,
borderRadius:20,
overflow:"hidden",
shadowColor:"#000",
shadowOpacity:0.2,
shadowRadius:10,
shadowOffset:{width:0,height:5},
elevation:6
},

bannerImage:{
height:160,
width:"100%"
},

sectionTitle:{
fontSize:18,
fontWeight:"bold",
marginHorizontal:15,
marginBottom:10
}

});