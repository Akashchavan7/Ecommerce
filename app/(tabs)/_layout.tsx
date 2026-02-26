import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon="home"
              outline="home-outline"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon="grid"
              outline="grid-outline"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon="person"
              outline="person-outline"
            />
          ),
        }}
      />
    </Tabs>
  );
}

function TabIcon({ focused, icon, outline }: any) {
  return (
    <View style={styles.iconContainer}>
      {focused ? (
        <LinearGradient
          colors={["#4facfe", "#00f2fe"]}
          style={styles.activeCircle}
        >
          <Ionicons name={icon} size={22} color="#fff" />
        </LinearGradient>
      ) : (
        <Ionicons name={outline} size={22} color="#555" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    paddingBottom: 10,
    paddingTop: 10,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },

    elevation: 15,
  },

  tabItem: {
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  activeCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});