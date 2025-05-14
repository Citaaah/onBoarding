import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const route = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require("../assets/images/pizza.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Scan, Track, Stay Healthy!</Text>
        <Text style={styles.subtitle}>
          Simply scan your food and get instant calorie and nutrition details!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => route.push("/onboardB")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/images/bg.png")}
        style={styles.waveBackground}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 120,
    paddingHorizontal: 10,
    width: "100%",
    zIndex: 1,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5D3891",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  waveBackground: {
    position: "absolute",
    bottom: -250,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  nextButton: {
    position: "absolute",
    bottom: 10,
    right: 30,
    backgroundColor: "#5D3891",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    zIndex: 2,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
