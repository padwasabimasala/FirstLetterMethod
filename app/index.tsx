import { Text, View } from "react-native";
import bible from "../bible.json";
console.log(bible.matthew["1"]);

export default function Index() {
  //const bible = bible["matthew"]["1"]["1"];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{bible.matthew["1"]}</Text>
    </View>
  );
}
