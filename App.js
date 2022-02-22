import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const randomNum = useRef(Math.random()).current;
  const [inputText, setInputText] = useState("");

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginBottom: 30,
          }}
        >
          Hello React Native
        </Text>

        <FlatList
          data={[0, 1, 2, 3, 4]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
              >
                <Image
                  source={{
                    uri: `https://picsum.photos/500/300?random=${
                      randomNum + item
                    }`,
                  }}
                  style={{ width: "100%", height: 160, marginBottom: 30 }}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => String(item)}
        />

        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <TextInput
          style={{
            width: "100%",
            height: 60,
            border: "2px solid black",
            backgroundColor: "lightpink",
          }}
          value={inputText}
          onChangeText={(e) => {
            Alert.alert("Want to write text ?");
            setInputText(e);
          }}
        />

        <Button
          onPress={() => Alert.alert("Learning RN is so easy")}
          title="Learn More"
          color="#c1262c"
        />
      </View>
    </ScrollView>
  );
}
