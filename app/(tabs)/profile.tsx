import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

export default function Profile() {

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={{
            uri: "https://i.pravatar.cc/300"
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Akash Chavan
        </Text>

        <Text style={styles.email}>
          akash@email.com
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Edit Profile
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "85%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 20
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827"
  },

  email: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 5
  },

  button: {
    marginTop: 20,
    backgroundColor: "#4f46e5",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600"
  }

});