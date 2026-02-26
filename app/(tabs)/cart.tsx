import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {

  return (
    <View style={styles.container}>

      <Ionicons
        name="cart-outline"
        size={80}
        color="#cbd5e1"
      />

      <Text style={styles.title}>
        Your Cart is Empty
      </Text>

      <Text style={styles.subtitle}>
        Looks like you haven’t added anything yet.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Start Shopping
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f8fafc",
    padding:20
  },

  title:{
    fontSize:20,
    fontWeight:"700",
    marginTop:20,
    color:"#111827"
  },

  subtitle:{
    fontSize:14,
    color:"#6b7280",
    marginTop:8,
    textAlign:"center"
  },

  button:{
    marginTop:25,
    backgroundColor:"#4f46e5",
    paddingVertical:12,
    paddingHorizontal:30,
    borderRadius:25
  },

  buttonText:{
    color:"#fff",
    fontWeight:"600"
  }

});