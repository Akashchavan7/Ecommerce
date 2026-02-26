import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { getCategories } from "@/services/productService";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

const { width } = Dimensions.get("window");

export default function Categories() {

  const router = useRouter();
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { load(); }, []);

  const load = async () => {
  const res = await getCategories();

  const mapped = res.map((item: any) => {

    if (typeof item === "string") {
      return {
        slug: item,
        name: item
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
      };
    }

    return {
      slug: item.slug,
      name: item.name
    };
  });

  setAllCategories(mapped);
  setFiltered(mapped);
};

  useEffect(() => {
    if (!searchText.trim()) setFiltered(allCategories);
    else {
      const lc = searchText.toLowerCase();
      setFiltered(
        allCategories.filter((c) =>
          c.name.toLowerCase().includes(lc)
        )
      );
    }
  }, [searchText, allCategories]);

  return (
    <View style={styles.root}>

      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <LinearGradient
        colors={["#ffffff", "#f8fafc"]}
        style={styles.header}
      >
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.subtitle}>
          Discover products by category
        </Text>
      </LinearGradient>

      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={18} color="#94a3b8" />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search categories"
          placeholderTextColor="#94a3b8"
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={filtered}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item: any) => item.slug}
        renderItem={({ item }) => {

          let iconName: any = "cube-outline";
          if (item.slug.includes("smartphones")) iconName = "phone-portrait-outline";
          else if (item.slug.includes("laptops")) iconName = "laptop-outline";
          else if (item.slug.includes("fragrances")) iconName = "sparkles-outline";
          else if (item.slug.includes("skincare")) iconName = "bandage-outline";
          else if (item.slug.includes("groceries")) iconName = "basket-outline";
          else if (item.slug.includes("home")) iconName = "home-outline";
          else if (item.slug.includes("furniture")) iconName = "bed-outline";

          return (
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.card}
              onPress={() => router.push(`/category/${item.slug}` as any)}
            >
              <LinearGradient
                colors={["#4f46e5", "#6366f1"]}
                style={styles.iconCircle}
              >
                <Ionicons name={iconName} size={22} color="#fff" />
              </LinearGradient>

              <Text style={styles.cardText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: "#f8fafc"
  },

  header: {
    paddingTop: 65,
    paddingBottom: 25,
    paddingHorizontal: 25
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827"
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#6b7280"
  },

  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 25,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#111827"
  },

  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 120
  },

  card: {
    width: (width - 60) / 2,
    backgroundColor: "#ffffff",
    margin: 10,
    paddingVertical: 30,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12
  },

  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    textAlign: "center"
  }

});