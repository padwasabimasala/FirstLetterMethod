import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import bible from "../bible.json";

function firstLettersAndPunct(str) {
  return [...str.matchAll(/\b(\p{L})|([^\p{L}\s])/gu)]
    .map((m) => m[1] || m[2])
    .join(" ");
}

function getVerse(verseNum) {
  return firstLettersAndPunct(bible.matthew[verseNum.toString()]);
}

export default function Index() {
  const [verseNum, setverseNum] = useState(1);
  const [verseText, setVerseText] = useState(bible.matthew["1"]);

  const onPanEnd = (event: any) => {
    const dx = event.nativeEvent.translationX;
    if (dx < -50) setverseNum((n) => n + 1);
    else if (dx > 50) setverseNum((n) => (n === 1 ? 1 : n - 1));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.END) onPanEnd(e);
        }}
      >
        <View>
          <Text style={styles.title}>Matthew 5:{verseNum}</Text>
          <Text style={styles.verse}>{getVerse(verseNum)}</Text>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
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
    fontSize: 80,
    margin: 30,
  },
});
