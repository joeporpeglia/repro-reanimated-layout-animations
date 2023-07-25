import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Animated, { Layout, FadeInUp, FadeOutUp } from "react-native-reanimated";

const SET_TRUE_TO_REPRO = false;

export default function App() {
  const [focused, setFocused] = useState(false);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} enabled={SET_TRUE_TO_REPRO}>
      <View
        style={styles.container}
        onTouchEnd={() => focused && Keyboard.dismiss()}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Animated.View
          layout={Layout.duration(150)}
          style={{ backgroundColor: "red", width: focused ? 300 : 100 }}
        >
          <TextInput
            style={{ backgroundColor: "blue", width: 50 }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
