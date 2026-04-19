import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">
                Go to Onboarding
            </Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4" asChild>
                <Text>Sign In</Text>
            </Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4" asChild>
                <Text>Sign Up</Text>
            </Link>
            <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4" asChild>
                <Text>Spotify Subscriptions</Text>
            </Link>
            <Link
                href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
                asChild
            >
                <Text className="mt-4 rounded bg-primary p-4 text-white">
                  Claude Subscriptions
                </Text>
            </Link>

          <Link href="/(tabs)/insights" asChild>
            <Text className="mt-4 rounded bg-primary p-4 text-white">Insights</Text>
          </Link>

          <Link href="/(tabs)/settings" asChild>
            <Text className="mt-4 rounded bg-primary p-4 text-white">Settings</Text>
          </Link>
        </View>
  );
}