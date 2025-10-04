import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import bible from "../bible.json";

function firstLettersAndPunct(str) {
  return [...str.matchAll(/\b(\p{L})|([^\p{L}\s])/gu)].map((m) => m[1] || m[2]);
}

export default function Index() {
  const [verseNum, setVerseNum] = useState(1);
  const [verseText, setVerseText] = useState(bible.matthew["1"]);

  const [count, setCount] = useState(0);

  const onPanEnd = (event: any) => {
    const dx = event.nativeEvent.translationX;
    if (dx < -50) setCount((c) => c + 1);
    else if (dx > 50) setCount((c) => c - 1);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.END) onPanEnd(e);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 40 }}>{count}</Text>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );

  // return (
  //   <GestureHandlerRootView style={{ flex: 1 }}>
  //     <SafeAreaView style={styles.container}>
  //       <Text style={styles.title}>Matthew 5:1</Text>
  //       <Text style={styles.verse}>
  //         {firstLettersAndPunct(verseText).join(" ")}
  //       </Text>
  //       <GestureDetector gesture={pan}>
  //         <Text style={{ fontSize: 40, textAlign: "center", marginTop: 200 }}>
  //           {count}
  //         </Text>
  //       </GestureDetector>
  //     </SafeAreaView>
  //   </GestureHandlerRootView>
  // );
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
