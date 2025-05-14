import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />

      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboardB"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="app"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
