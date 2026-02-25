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
}:any){

return(

<TouchableOpacity
style={styles.card}
onPress={onPress}
>

<Image
source={{uri:item.thumbnail}}
style={styles.image}
/>

<Text numberOfLines={1} style={styles.title}>
{item.title}
</Text>

<Text style={styles.price}>
₹ {item.price}
</Text>

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
borderRadius:12,
elevation:3
},

image:{
height:130,
borderRadius:8
},

title:{
marginTop:6,
fontSize:14
},

price:{
fontWeight:"bold",
marginTop:4
},

ratingBox:{
backgroundColor:"#388e3c",
alignSelf:"flex-start",
paddingHorizontal:6,
borderRadius:4,
marginTop:4
},

rating:{
color:"#fff",
fontSize:12
}

});