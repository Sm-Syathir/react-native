import { useState, useEffect } from "react";
import * as React from 'react';
import { useLocalSearchParams } from "expo-router";
import { Text, Searchbar, Modal, Portal, Button, PaperProvider} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import foodJSON from "../data.json";

import {
  View,
  Image,
  ScrollView,
} from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const COLOR_THEMES = ["#85B4F2", "#C5F263", "#F2D857", "#F27979", "#9B59B6"];

export default function Details() {
     const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

const [searchQuery, setSearchQuery] = React.useState('');
  const params = useLocalSearchParams();
  const foodID = params?.id;
  const food = foodJSON.foods.find((Item) => Item.id == foodID);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLOR_THEMES.length);
    }, 800); 
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <SafeAreaView>
    <View>
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery} 
      style={{ marginTop: 20, marginBottom: 20, width: 450, alignSelf: "center", backgroundColor: "#E6EAED" }}
      />
    </View>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Image
            source={{ uri: food?.image }}
            style={{
              width: 450,
              height: 200,
              borderRadius: 20,
              borderWidth: 5,
              borderColor: COLOR_THEMES[colorIndex], 
            }}/>
        </View>

        <View>
            <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "##000000",
              left: 25
            }}
            >{food?.name}</Text>
        </View>

        <View>
            <Text
            style={{
              fontSize: 15,
              color: "##000000",
              left: 25,
              top: 5
            }}
            >Asal: {food?.region}</Text>
        </View>

        <View>
            <Text
            style={{
              fontSize: 15,
              color: "##000000",
              left: 25,
              top: 15,
              width: "90%"

            }}
            >Deskripsi: {food?.description}</Text>
        </View>

        <View>
            <PaperProvider>
        <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
