import {
 View,
 Text,
 Image,
 StyleSheet,
 TouchableOpacity
} from "react-native";

export default function ProductCard({
 item,
 onPress
}: any) {

 const discountPrice =
  item.price -
  (item.price * item.discountPercentage) / 100;

 return (

<TouchableOpacity
style={styles.card}
onPress={onPress}
activeOpacity={0.8}
>

{/* Product Image */}

<Image
source={{ uri: item.thumbnail }}
style={styles.image}
/>

{/* Discount Badge */}

<View style={styles.discountBadge}>
<Text style={styles.discountText}>
{Math.round(item.discountPercentage)}% OFF
</Text>
</View>

{/* Title */}

<Text numberOfLines={1} style={styles.title}>
{item.title}
</Text>

{/* Price Section */}

<View style={styles.priceRow}>

<Text style={styles.price}>
₹ {Math.round(discountPrice)}
</Text>

<Text style={styles.oldPrice}>
₹ {item.price}
</Text>

</View>

{/* Rating */}

<View style={styles.ratingBox}>
<Text style={styles.rating}>
⭐ {item.rating}
</Text>
</View>

</TouchableOpacity>

 );
}

const styles = StyleSheet.create({

card:{
flex:1,
backgroundColor:"#fff",
margin:6,
padding:10,
borderRadius:10,
elevation:3,
position:"relative"
},

image:{
height:130,
borderRadius:8
},

discountBadge:{
position:"absolute",
top:8,
left:8,
backgroundColor:"#388e3c",
paddingHorizontal:6,
paddingVertical:2,
borderRadius:4
},

discountText:{
color:"#fff",
fontSize:11,
fontWeight:"bold"
},

title:{
marginTop:8,
fontSize:14
},

priceRow:{
flexDirection:"row",
alignItems:"center",
marginTop:4
},

price:{
fontWeight:"bold",
fontSize:15,
marginRight:6
},

oldPrice:{
textDecorationLine:"line-through",
color:"gray",
fontSize:12
},

ratingBox:{
backgroundColor:"#388e3c",
alignSelf:"flex-start",
paddingHorizontal:6,
borderRadius:4,
marginTop:6
},

rating:{
color:"#fff",
fontSize:12
}

});