import { Tabs } from "expo-router";
import { View,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout(){

return(

<Tabs

screenOptions={{

headerShown:false,

tabBarShowLabel:false,

tabBarStyle:styles.tabBar

}}

>

<Tabs.Screen
name="index"
options={{
tabBarIcon:({focused})=>(
<View style={[
styles.iconBox,
focused && styles.active
]}>
<Ionicons
name="home"
size={22}
color={focused?"#fff":"#555"}
/>
</View>
)
}}
/>

<Tabs.Screen
name="categories"
options={{
tabBarIcon:({focused})=>(
<View style={[
styles.iconBox,
focused && styles.active
]}>
<Ionicons
name="grid"
size={22}
color={focused?"#fff":"#555"}
/>
</View>
)
}}
/>

<Tabs.Screen
name="profile"
options={{
tabBarIcon:({focused})=>(
<View style={[
styles.iconBox,
focused && styles.active
]}>
<Ionicons
name="person"
size={22}
color={focused?"#fff":"#555"}
/>
</View>
)
}}
/>

</Tabs>

);

}

const styles=StyleSheet.create({

tabBar:{
position:"absolute",
bottom:20,
left:20,
right:20,

height:65,

borderRadius:35,

backgroundColor:"#ffffff",

shadowColor:"#000",
shadowOpacity:0.15,
shadowRadius:15,
shadowOffset:{width:0,height:10},

elevation:10
},

iconBox:{
width:45,
height:45,
borderRadius:22,
justifyContent:"center",
alignItems:"center"
},

active:{
backgroundColor:"#4facfe"
}

});