import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import bible from "../bible.json";
console.log(bible.matthew["1"]);

export default function Index() {
  const [verses] = useState(bible.matthew["1"]);
  //const bible = bible["matthew"]["1"]["1"];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Matthew 5:1</Text>
      <Text style={styles.verse}>{bible.matthew["1"]}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFF",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    marginTop: 30,
  },
  verse: {
    fontSize: 40,
    margin: 30,
  },
});
