import {
View,
Text,
Image,
StyleSheet,
TouchableOpacity
} from "react-native";

export default function ProductCard({item,onPress}:any){

const discount =
item.price -
(item.price*item.discountPercentage)/100;

return(

<TouchableOpacity
style={styles.card}
activeOpacity={0.9}
onPress={onPress}
>

<Image
source={{uri:item.thumbnail}}
style={styles.image}
/>

<View style={styles.info}>

<Text numberOfLines={1} style={styles.title}>
{item.title}
</Text>

<Text style={styles.price}>
₹ {Math.round(discount)}
</Text>

<Text style={styles.rating}>
⭐ {item.rating}
</Text>

</View>

</TouchableOpacity>

);

}

const styles=StyleSheet.create({

card:{
flex:1,
margin:8,
backgroundColor:"#fff",
borderRadius:18,
overflow:"hidden",

shadowColor:"#000",
shadowOpacity:0.2,
shadowRadius:12,
shadowOffset:{width:0,height:8},

elevation:8
},

image:{
height:150,
width:"100%"
},

info:{
padding:10
},

title:{
fontSize:14,
fontWeight:"600"
},

price:{
fontSize:16,
fontWeight:"bold",
marginTop:4
},

rating:{
marginTop:4,
color:"#388e3c"
}

});