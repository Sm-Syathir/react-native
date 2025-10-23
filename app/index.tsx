import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import foodJSON from "../data.json";

const COLOR_THEMES = ["#85B4F2", "#C5F263", "#F2D857", "#F27979", "#F2F2F2"];

export default function Home() {
  const [foodData, setFoodData] = useState<any[]>([]);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLOR_THEMES.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    try {
      setFoodData(foodJSON.foods);
    } catch (e) {
      console.log("Error loading food data:", e);
    }
  }, []);

  const renderFood = ({ item }: { item: any }) => (
    <View style={styles.cardContainer}>
      <Link href={{ pathname: "/details", params: { id: item.id } }} asChild>
        <TouchableOpacity activeOpacity={0.85}>
          <Card style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text
                style={[styles.headerText, { color: COLOR_THEMES[colorIndex] }]}
              >
                {item.name}
              </Text>
              <Text style={styles.cardSubtitle}>{item.region}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </Link>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Makanan Khas </Text>
        <Text style={[styles.headerText, { color: COLOR_THEMES[colorIndex] }]}>
          Indonesia
        </Text>
      </View>

      <FlatList
        data={foodData}
        renderItem={renderFood}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // putih bersih
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },
  listContainer: {
    paddingBottom: 40,
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    margin: 8,
  },
  card: {
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  cardInfo: {
    padding: 12,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
    textAlign: "center",
  },
});
