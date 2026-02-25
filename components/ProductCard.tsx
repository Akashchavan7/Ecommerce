import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({item,onPress}:any){

const price=item.price-(item.price*item.discountPercentage)/100;

return(

<TouchableOpacity
style={styles.card}
onPress={onPress}
activeOpacity={0.9}
>

<Image
source={{uri:item.thumbnail}}
style={styles.image}
/>

<View style={styles.badge}>
<Text style={styles.badgeText}>
{Math.round(item.discountPercentage)}% OFF
</Text>
</View>

<Text numberOfLines={1} style={styles.title}>
{item.title}
</Text>

<Text style={styles.price}>
₹ {Math.round(price)}
</Text>

<View style={styles.rating}>
<Text style={{color:"#fff"}}>
⭐ {item.rating}
</Text>
</View>

</TouchableOpacity>

);
}

const styles=StyleSheet.create({

card:{
flex:1,
backgroundColor:"#fff",
margin:6,
padding:10,
borderRadius:10,
elevation:3
},

image:{
height:130,
borderRadius:8
},

badge:{
position:"absolute",
top:8,
left:8,
backgroundColor:"green",
paddingHorizontal:6,
borderRadius:4
},

badgeText:{
color:"#fff",
fontSize:11
},

title:{
marginTop:8
},

price:{
fontWeight:"bold",
marginTop:4
},

rating:{
backgroundColor:"green",
alignSelf:"flex-start",
paddingHorizontal:6,
borderRadius:4,
marginTop:6
}

});