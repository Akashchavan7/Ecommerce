import { View,Text,FlatList,TouchableOpacity,StyleSheet } from "react-native";
import { useEffect,useState } from "react";
import { getCategories } from "@/services/productService";
import { useRouter } from "expo-router";

export default function Categories(){

const router=useRouter();
const [data,setData]=useState([]);

useEffect(()=>{
load();
},[]);

const load=async()=>{
const res=await getCategories();
setData(res);
};

return(

<View style={styles.container}>

<FlatList
data={data}
keyExtractor={(item:any)=>item.slug}
renderItem={({item})=>(

<TouchableOpacity
style={styles.card}
onPress={()=>router.push(`/category/${item.slug}` as any)}
>

<Text style={styles.text}>
{item.name}
</Text>

</TouchableOpacity>

)}
/>

</View>

);
}

const styles=StyleSheet.create({

container:{flex:1,padding:15},

card:{
backgroundColor:"#fff",
padding:20,
marginBottom:10,
borderRadius:10,
elevation:3
},

text:{fontWeight:"bold"}

});