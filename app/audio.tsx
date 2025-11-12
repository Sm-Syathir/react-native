import { View, StyleSheet, Button } from "react-native";
import { useAudioPlayer } from "expo-audio";

const audioSource = require("../assets/music.mp3");

export default function App() {
  const player = useAudioPlayer(audioSource);

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Play" onPress={() => player.play()} color="#2563eb" />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Pause" onPress={() => player.pause()} color="#f59e0b" />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Replay"
          onPress={() => {
            player.seekTo(0);
            player.play();
          }}
          color="#10b981"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    padding: 20,
  },
  buttonWrapper: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});
